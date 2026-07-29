// ---------------------------------------------------------------------------
// Catálogo de Jornais Catarinenses — service worker
//
// Serve para duas coisas:
//   1. fazer o celular tratar o catálogo como aplicativo de verdade (sem a
//      marca do navegador sobre o ícone);
//   2. permitir abrir o catálogo mesmo sem internet, com os dados da última
//      visita.
//
// ESTRATÉGIA: "rede primeiro". O catálogo SEMPRE tenta buscar a versão mais
// recente na internet. A cópia guardada só é usada quando não há conexão.
// Isso é proposital: evita que alguém fique vendo uma versão antiga depois de
// o arquivo ser atualizado no GitHub.
// ---------------------------------------------------------------------------

const CACHE = 'bpsc-catalogo-v1';
const ESSENCIAIS = ['./', './index.html', './manifest.json'];

self.addEventListener('install', (evento) => {
  evento.waitUntil(
    caches.open(CACHE)
      .then((c) => c.addAll(ESSENCIAIS))
      .catch(() => {})          // se algum arquivo falhar, instala mesmo assim
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (evento) => {
  evento.waitUntil(
    caches.keys()
      .then((nomes) => Promise.all(
        nomes.filter((n) => n !== CACHE).map((n) => caches.delete(n))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (evento) => {
  const req = evento.request;
  if (req.method !== 'GET') return;

  // Não interfere na planilha nem no formulário: essas leituras precisam ser
  // sempre ao vivo e não devem ficar guardadas.
  if (req.url.includes('docs.google.com')) return;

  evento.respondWith(
    fetch(req)
      .then((resp) => {
        if (resp && resp.status === 200 && resp.type === 'basic') {
          const copia = resp.clone();
          caches.open(CACHE).then((c) => c.put(req, copia)).catch(() => {});
        }
        return resp;
      })
      .catch(() =>
        caches.match(req).then((r) => r || caches.match('./index.html'))
      )
  );
});
