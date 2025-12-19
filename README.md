
---

# ✅ Site TSI-IFB — Tecnologia em Sistemas para Internet

---
Landing Page institucional e responsiva, desenvolvido para apresentação do **Curso Superior de Tecnologia em Sistemas para Internet (TSI)**.
O projeto utiliza **HTML5**, **CSS modularizado**, **JavaScript puro**, bibliotecas externas para animações e ícones, além de utilizar as práticas **Clear Code**.

---

## 🧠 Tecnologias Utilizadas

- * **HTML5** — estrutura semântica
- * **CSS3** — estilização modular
- * **JavaScript (ES6)** — interatividade
- * **Google Fonts** — tipografia (Sora / Poppins)
- * **Font Awesome** — ícones
- * **AOS.js** — animações ao rolar a página
- * **jQuery** — suporte a interações específicas

---
## 📋 Funcionalidades do Site

* ✅ Landing page que apresenta o curso TSI
* ✅ Menu responsivo para desktop e mobile
* ✅ Navegação por âncoras com scroll suave
* ✅ Seções bem definidas
* ✅ Galeria visual de disciplinas e carreiras
* ✅ Validação básica de formulário com JavaScript
* ✅ Links externos para PPC do curso e teste de carreira
* ✅ Footer informativo com menu, autores e versão do projeto

---

---
## 🌍 Hospedagem na Vercel

O site está hospedado na **Vercel**:

* `Link para navegação: https://landing-page-projeto-final.vercel.app/`

---

## 🌍 Conteúdo do Site

O site apresenta informações oficiais do curso de TSI, como:

* Perfil do egresso
* Mercado de trabalho
* Carga horária, duração e turno
* Principais Disciplinas práticas do curso
* Possibilidades de carreira
* Empresa Júnior vinculada ao curso de TSI
* Link de acesso ao **PPC(Projeto Pedagógico do Curso)**.

---


---

## 🗂️ Estrutura de Pastas do Projeto

```
/ (raiz do projeto)
│
├── index.html                 ← Página principal
│
├── images/                    ← Imagens do site
│
├── src/
│   ├── css/
│   │   ├── navbar.css         ← Menu e navegação
│   │   ├── layout.css         ← Estrutura geral
│   │   ├── hero.css           ← Seção hero
│   │   ├── contatos.css       ← Formulário e contatos
│   │   ├── footer.css         ← Rodapé
│   │   └── style.css          ← Arquivo central de estilos
│   │
│   └── javascript/
│       ├── script.js          ← Menu mobile
│       ├── efeitosrolar.js    ← Efeitos de rolagem
│       ├── cards.js           ← Interações visuais
│       └── validate.js        ← Validação de formulário
│
└── README.md                  ← Apresentação do projeto
```





## 🎨 Arquitetura de Estilos (CSS Modular)

O projeto utiliza **CSS modular**, com separação por responsabilidade.
O arquivo `style.css` funciona como **arquivo principal**, importando os demais estilos:

    @import url(/src/css/navbar.css);
    @import url(/src/css/layout.css);
    @import url(/src/css/hero.css);
    @import url(/src/css/contatos.css);
    @import url(/src/css/footer.css);


## ⚙️ JavaScript — Organização Funcional

Cada arquivo JavaScript possui uma responsabilidade clara:

- `script.js` → controle do menu mobile
- `efeitosrolar.js` → animações e rolagem
- `cards.js` → efeitos visuais nos cards
- `validate.js` → validação de formulário

Essa separação facilita manutenção, testes e explicação do site.
---

## 👨‍💻 Autores

**Felipe Ladeira**  
**Guilherme Ferreira**

Projeto desenvolvido para fins **educacionais**, com foco na apresentação do curso de **Tecnologia em Sistemas para Internet (TSI)**.
```
