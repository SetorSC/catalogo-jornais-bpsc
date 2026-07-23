# Catálogo de Jornais Catarinenses — Manual de manutenção

**Biblioteca Pública de Santa Catarina · Setor Santa Catarina · Fundação Catarinense de Cultura**

Documento de referência para quem mantém o catálogo. Escrito para ser entendido
por bibliotecários, sem exigir conhecimento de programação.

Endereço do catálogo: <https://setorsc.github.io/catalogo-jornais-bpsc/>

---

## 1. Para que serve este documento

O *Catálogo de Jornais Catarinenses* está hoje na 6ª edição (2026) e reúne mais
de 1.800 títulos de jornais e periódicos do acervo da BPSC.

Este manual existe para que **qualquer pessoa do setor consiga manter o catálogo
funcionando**, mesmo sem ter participado da construção dele e mesmo sem saber
programar. Ele responde a três perguntas:

1. Como incluir um título novo ou novas edições (rotina do dia a dia).
2. Como o catálogo é publicado na internet.
3. O que fazer quando algo dá errado.

Guarde este documento junto com os arquivos do catálogo. Se ele se perder, o
conhecimento de como manter o catálogo se perde junto.

---

## 2. Como o catálogo funciona, em linguagem simples

O catálogo é formado por **três peças** que conversam entre si.

### Peça 1 — O arquivo publicado (`index.html`)

É o catálogo em si: **um único arquivo** que contém, ao mesmo tempo, o texto da
página, a aparência e todos os títulos do acervo. Não existe banco de dados nem
servidor por trás; está tudo dentro desse arquivo.

Isso tem uma consequência importante: **nada que se digite no navegador altera o
arquivo**. Para mudar o que os visitantes veem, o arquivo precisa ser substituído
por uma versão nova (ver seção 6).

### Peça 2 — A planilha "Jornais Inclusão" (Google Planilhas)

É onde entram os títulos e as edições novas. O catálogo **lê** essa planilha toda
vez que alguém abre a página e soma o que encontra lá aos títulos que já estão no
arquivo.

A planilha tem duas abas, e o catálogo lê as duas:

| Aba | Para que serve |
|---|---|
| **Respostas ao formulário 1** | Recebe o que é enviado pelo formulário (uso normal) |
| **Página1** | Para lançar muitos títulos de uma vez, colando linhas |

### Peça 3 — O formulário "Jornais Inclusão" (Google Formulários)

É a porta de entrada do dia a dia. Preenche-se o formulário, e o Google grava a
resposta na planilha sozinho.

### O caminho que a informação percorre

```
     Formulário  ─┐
                  ├─►  Planilha  ─►  Catálogo publicado  ─►  Visitante
   Página1 (lote) ─┘
```

O caminho é de **mão única**: da planilha para o catálogo. O catálogo nunca
escreve na planilha.

---

## 3. Rotina do dia a dia

### 3.1 Incluir um título novo

1. Abra o catálogo e clique em **"+ Inserir novo título"** (canto superior direito).
2. Entre com o e-mail e a senha da equipe.
3. Clique em **"➕ Incluir título ou edição"** — o formulário abre em outra aba.
4. Preencha e envie.
5. Espere de **1 a 5 minutos** e recarregue o catálogo. O título estará lá.

Obrigatórios: **Título** e **Município**. Sem os dois, a linha é ignorada.

### 3.2 Acrescentar edições a um jornal que já existe

É o mesmo formulário. A regra é simples:

> Repita o **título** e o **município** exatamente como aparecem no catálogo e
> informe **apenas os anos novos** no campo Disponibilidade.

O catálogo reconhece que o jornal já existe e junta as informações no registro
que já está lá, em vez de criar um segundo. Linhas repetidas são ignoradas — não
há risco de duplicar se você reenviar algo por engano.

**Atenção:** se o título ou o município forem digitados de forma diferente (uma
letra a mais, um acento trocado), o catálogo entende que é outro jornal e cria um
registro separado. Na dúvida, copie e cole do próprio catálogo.

### 3.3 Preencher o campo Disponibilidade

Um ano por linha. Use **Alt+Enter** para pular linha dentro do campo.

```
1934 - agosto · setembro
1935 - janeiro · fevereiro · março
1940
🔴 Digitalizado: 1940 a 1952
⚠ INTERDITADO PARA RESTAURAÇÃO: JAN – MAR – 1947
```

- Linhas começadas por **🔴** indicam o que está digitalizado.
- Linhas começadas por **⚠** indicam edições interditadas para restauração.
- Uma linha só com o ano também vale.

O catálogo calcula sozinho o período (1934–1940) e o ano inicial e final. Não é
preciso digitar isso.

### 3.4 Lançar muitos títulos de uma vez

Preencher formulário 30 vezes é penoso. Para isso existe a aba **Página1**: basta
colar as linhas direto, respeitando o cabeçalho. O resultado é o mesmo.

### 3.5 Corrigir ou apagar algo cadastrado pela planilha

Apague ou corrija **a linha na planilha** — é ela que manda.

> Apagar a resposta no formulário **não** apaga a linha da planilha. E apagar a
> linha da planilha não apaga a resposta no formulário. São dois lugares
> diferentes. Para o catálogo, vale a planilha.

Depois de apagar, espere alguns minutos e recarregue o catálogo.

### 3.6 Corrigir um título que está no arquivo publicado

Títulos que fazem parte dos 1.837 registros originais **não estão na planilha** e
não podem ser corrigidos por ela. Para alterá-los, é preciso mexer no arquivo e
publicar de novo (seção 6).

---

## 4. As colunas da planilha

O catálogo identifica as colunas **pelo nome do cabeçalho**, não pela posição.
Isso significa que você pode reordenar ou inserir colunas sem quebrar nada — desde
que os nomes continuem reconhecíveis.

| Coluna | Obrigatória | Observações |
|---|---|---|
| Título | **sim** | Convertido para MAIÚSCULAS automaticamente |
| Subtítulo | não | |
| Município | **sim** | |
| Periodicidade | não | Ver lista na seção 5 |
| Idioma | não | Se vazio, assume "Português" |
| Digitalizado | não | Escreva `Sim` (ou deixe vazio) |
| Microfilme | não | Escreva `Sim` (ou deixe vazio) |
| Disponibilidade | **sim** | Um ano por linha |
| Link | não | Endereço na Hemeroteca Digital |
| Data de inclusão | não | Só na Página1. Na aba do formulário, o carimbo de data/hora faz esse papel |

O campo **Data de inclusão** é o que alimenta a aba "Atualizações" do catálogo,
que mostra os títulos novos agrupados por data.

---

## 5. Periodicidades aceitas

O catálogo e o formulário usam a mesma lista de 17 opções:

Diário · Semanal · Bissemanal · Trissemanal · Dominical · Quinzenal · Mensal ·
Bimensal · Bimestral · Trimestral · Semestral · Anual · Bianual · Irregular ·
Edição única · Edição Comemorativa · N. Especial

O filtro de periodicidade do catálogo **é montado automaticamente a partir dos
dados**. Se um dia aparecer uma periodicidade fora dessa lista, ela surgirá no
filtro — o que serve de aviso de que algo saiu do padrão.

*Nota:* **Bimensal** (duas vezes por mês) e **Bimestral** (a cada dois meses) são
coisas diferentes e estão propositalmente separados.

---

## 6. Como o catálogo é publicado

O catálogo fica hospedado no **GitHub Pages**, um serviço gratuito que publica
arquivos na internet.

- Repositório: `SetorSC/catalogo-jornais-bpsc`
- Endereço público: <https://setorsc.github.io/catalogo-jornais-bpsc/>

Para publicar uma versão nova do arquivo:

1. Entre no GitHub com a conta do setor.
2. Abra o repositório e clique no arquivo `index.html`.
3. Clique no ícone de **lápis** (editar) ou em **"Upload files"** para substituir
   o arquivo por um novo.
4. Confirme (**Commit changes**).
5. Espere de **1 a 2 minutos** e recarregue o catálogo.

> **Guarde sempre uma cópia da versão anterior** antes de substituir. Se a nova
> apresentar problema, basta republicar a antiga.

---

## 7. Para quem for mexer no arquivo

Esta seção é para quem tiver alguma familiaridade com informática. As tarefas do
dia a dia (seções 3 a 5) não exigem nada disso.

### 7.1 Como o arquivo é organizado

O `index.html` tem, nesta ordem:

1. **Aparência** (bloco `<style>`) — cores, tamanhos, layout.
2. **Conteúdo da página** — cabeçalho, menus, filtros, janelas de texto.
3. **Os dados** (bloco `<script id="jd">`) — todos os títulos, numa longa linha.
4. **O funcionamento** (bloco `<script>` final) — busca, filtros, leitura da
   planilha.

### 7.2 Como um título é guardado

Cada título é um conjunto de campos. Exemplo real:

```json
{
  "t": "A AURORA : ORGAM LITTERARIO, HUMORISTICO E NOTICIOSO",
  "s": "",
  "l": "Lages",
  "p": "Mensal",
  "i": "Português",
  "d": true,
  "m": true,
  "y": 1906,
  "ye": 1907,
  "disp": "1906–1907",
  "raw": "1906\n1907\n🔴 Digitalizado: consulte a Hemeroteca Digital",
  "url": "https://hemeroteca2.cultura.sc.gov.br/docreader/..."
}
```

| Campo | Significado |
|---|---|
| `t` | Título |
| `s` | Subtítulo |
| `l` | Município |
| `p` | Periodicidade |
| `i` | Idioma |
| `d` | Digitalizado (verdadeiro/falso) |
| `m` | Microfilmado (verdadeiro/falso) |
| `y` / `ye` | Ano inicial e ano final |
| `disp` | Período exibido no card (ex.: "1906–1907") |
| `raw` | Disponibilidade completa, uma linha por ano |
| `url` | Link direto para a Hemeroteca Digital |
| `add` | Data de inclusão (só nos títulos acrescentados depois) |

O `\n` dentro do campo `raw` representa uma quebra de linha.

### 7.3 Onde ficam os endereços configurados

Todos no bloco de funcionamento, perto do início, com comentários explicando:

- `FORM_URL` — endereço do formulário
- `FONTES_PLANILHA` — endereços das duas abas publicadas da planilha

Para trocar a planilha ou o formulário, basta substituir esses endereços.

> Os endereços da planilha precisam ser os gerados por **Arquivo → Compartilhar →
> Publicar na web**, no formato CSV. O link comum de compartilhamento **não
> funciona**, porque o navegador bloqueia a leitura.

### 7.4 Sobre o script `build_html_v2.py` — atenção

Existe nos arquivos do projeto um script em Python chamado `build_html_v2.py`.
Ele **não gera o catálogo que está publicado hoje** e não deve ser usado para
isso.

Esse script pertence a uma versão anterior do catálogo. Ele lê um arquivo
`todos_jornais_final.json` e produz um `catalogo_final.html` com estrutura
totalmente diferente da atual: outro visual, outros nomes de campos
(`titulo`, `local`, `digital` em vez de `t`, `l`, `d`) e **sem** o painel
restrito, a leitura da planilha e o botão do formulário.

> **Não rode esse script esperando "regenerar o catálogo".** O resultado seria um
> arquivo antigo e incompleto. Se for usá-lo para consulta histórica, guarde-o
> numa pasta separada, marcada como obsoleta.

**Então como o catálogo atual é mantido?**

Não existe hoje um script que o gere. O `index.html` publicado é o próprio
original: ele foi evoluindo por edições diretas ao longo do tempo. Na prática:

- A **fonte oficial dos dados** é o bloco `<script id="jd">` dentro do próprio
  `index.html`. Não há um arquivo de dados separado que esteja atualizado.
- As **inclusões do dia a dia** não passam por script nenhum: vão pela planilha.
- As **alterações estruturais** (mudar aparência, corrigir um título antigo,
  acrescentar um recurso) são feitas editando o arquivo e publicando de novo.

Isso é mais simples do que parece — é um arquivo só, e ele é a verdade — mas tem
um custo: alterações em massa nos dados exigem alguém que saiba mexer em texto
estruturado. É o principal ponto que ainda depende de conhecimento técnico.

**Se um dia for preciso um script novo**, ele deve fazer duas coisas: extrair os
dados de dentro do `index.html` para um arquivo separado, e reinseri-los depois
de corrigidos. É exatamente o que a consolidação da seção 8 pede.

---

## 8. Consolidação periódica (importante)

Hoje os dados vivem em **dois lugares**: dentro do `index.html` e na planilha.
Isso funciona bem, mas não deve durar para sempre — quanto mais a planilha cresce,
mais o catálogo depende dela para estar completo, e mais lenta fica a abertura.

**Recomendação:** uma ou duas vezes por ano, incorporar os títulos da planilha ao
arquivo principal e limpar a planilha. Assim o arquivo publicado volta a ser
autossuficiente.

Essa tarefa exige mexer no arquivo (seção 7) e é o momento natural para também
gerar uma nova edição do catálogo.

Como não há script pronto para isso (ver 7.4), a consolidação hoje depende de
alguém com alguma habilidade técnica. Vale registrar isso no planejamento do
setor em vez de descobrir na hora.

---

## 9. Limitações e riscos conhecidos

Registrados aqui para que ninguém seja pego de surpresa.

**A área restrita não é segurança de verdade.** O e-mail e a senha da equipe estão
escritos dentro do `index.html`, que é um arquivo público. Quem souber procurar
consegue lê-los. Isso serve para evitar que um visitante distraído mexa onde não
deve, não para impedir alguém mal-intencionado. Como o painel hoje só abre o
formulário, o risco é pequeno — mas convém saber.

**O catálogo depende do Google.** Se a planilha for apagada, despublicada ou o
Google mudar o funcionamento, os títulos acrescentados por ela deixam de aparecer.
Os 1.837 títulos originais continuam funcionando normalmente, porque estão dentro
do arquivo. Vale exportar uma cópia da planilha de tempos em tempos.

**Falhas de leitura não derrubam o catálogo.** Se a planilha estiver fora do ar ou
mal preenchida, o catálogo ignora e abre normalmente com o acervo publicado.

**A publicação não é instantânea.** Entre preencher o formulário e o título
aparecer passam de 1 a 5 minutos (atualização do Google).

**Inconsistências antigas nos dados.** Restam pequenas variações de grafia herdadas
das edições anteriores, sobretudo em idiomas compostos ("Português/ Alemão"). Não
atrapalham o uso; podem ser uniformizadas numa próxima consolidação.

---

## 10. Quando algo dá errado

### O catálogo abre em branco ou fica preso em "Carregando..."

Sinal de erro no arquivo publicado. Republique a versão anterior (você guardou uma
cópia — seção 6). Para descobrir a causa: abra o catálogo, aperte **F12**, clique
na aba **Console** e veja a mensagem em vermelho.

### Cadastrei pelo formulário e o título não aparece

1. Espere 5 minutos e recarregue.
2. Confira se **Título** e **Município** foram preenchidos.
3. Verifique se a linha realmente chegou à planilha.
4. Aperte **F12** → **Console**. O catálogo escreve uma linha por fonte, dizendo
   quantos registros leu de cada aba. Se houver falha, ela diz qual aba e por quê.

### Um jornal apareceu duplicado

Título ou município foram digitados de forma diferente do registro existente.
Corrija a linha na planilha para que fiquem idênticos.

### A planilha parou de ser lida

Confira se ela continua **publicada na web** (Arquivo → Compartilhar → Publicar na
web). Publicações podem ser interrompidas por engano.

---

## 11. Endereços e contatos

| O quê | Onde |
|---|---|
| Catálogo publicado | <https://setorsc.github.io/catalogo-jornais-bpsc/> |
| Repositório (GitHub) | `SetorSC/catalogo-jornais-bpsc` |
| Planilha | Google Drive do setor — "Jornais Inclusão" |
| Formulário | Vinculado à planilha (aba Respostas) |
| Setor responsável | Setor Santa Catarina — BPSC/FCC |
| E-mail | setorsantacatarina@fcc.sc.gov.br |

Os endereços exatos da planilha e do formulário estão configurados dentro do
`index.html` (seção 7.3).

---

## 12. Pequeno glossário

| Termo | O que quer dizer |
|---|---|
| **HTML** | A linguagem das páginas de internet. O catálogo inteiro é um arquivo desses. |
| **Repositório** | A pasta do projeto no GitHub, com histórico de todas as versões. |
| **GitHub Pages** | Serviço gratuito que transforma os arquivos do repositório em site. |
| **CSV** | Formato simples de planilha, em texto. É como o catálogo lê os dados do Google. |
| **Publicar na web** | Opção do Google que deixa a planilha legível por outros sites. Diferente de "compartilhar por link". |
| **Console (F12)** | Janela do navegador que mostra mensagens técnicas. Útil para descobrir a causa de um problema. |
| **Cache** | Cópia temporária que o navegador guarda. Se algo não atualiza, recarregue com **Ctrl+F5**. |

---

*Documento redigido em julho de 2026. Atualize-o sempre que o funcionamento mudar
— um manual desatualizado atrapalha mais do que ajuda.*
