# Structure du projet — version multipage

## 1) Structure actuelle (one-page)

```
formation_IAmaths/
├── index.html
├── style.css
├── script.js
└── README.md
```

## 2) Structure cible (multipage)

```
formation_IAmaths/
├── index.html                    # Accueil
├── pages/
│   ├── formation.html            # Parcours de formation (3h / 6h)
│   ├── concepts.html             # Modèles, wrappers, agents, RAG
│   ├── prompts.html              # Banque de prompts + copier
│   ├── latex-overleaf.html       # Atelier LaTeX / Overleaf
│   ├── verification.html         # Grille de contrôle / cadre d'usage
│   └── ressources.html           # Kit, téléchargements, liens utiles
├── assets/
│   ├── css/
│   │   ├── base.css              # Variables, reset, typographie
│   │   ├── layout.css            # Grilles, sections, responsive
│   │   └── components.css        # Cards, boutons, tables, tabs
│   ├── js/
│   │   ├── nav.js                # Menu mobile + liens actifs
│   │   ├── tabs.js               # Onglets de prompts
│   │   └── copy.js               # Boutons copier
│   └── img/                      # Illustrations / icônes
├── docs/
│   └── contenus.md               # Textes de référence de la formation
├── README.md
└── SITE_STRUCTURE.md
```

## 3) Principes d'organisation

- **Une page = un objectif pédagogique clair** (lisibilité pour les enseignants).
- **Mutualisation des styles/scripts** via `assets/` pour éviter les doublons.
- **Navigation cohérente** : même en-tête et même pied de page sur toutes les pages.
- **Évolutivité** : possibilité d'ajouter ensuite des pages `cas-pratiques.html` ou `faq.html` sans refonte globale.

## 4) Ordre de migration recommandé

1. Créer l'arborescence `pages/` et `assets/`.
2. Extraire le CSS actuel vers `assets/css/` (base/layout/components).
3. Séparer le JS actuel en modules simples (`nav.js`, `tabs.js`, `copy.js`).
4. Découper le contenu de `index.html` dans les pages dédiées.
5. Conserver une page d'accueil synthétique qui redirige vers les pages thématiques.
