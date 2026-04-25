const promptTemplates={intro:`# Rôle
Tu es professeur de mathématiques en classe de [niveau].

# Objectif
Créer une activité d’introduction pour découvrir [notion].

# Contexte
- Les élèves connaissent déjà : [prérequis].
- Les difficultés fréquentes sont : [difficultés].
- La classe est : [profil de classe].

# Contraintes
- Durée : [durée]
- L’activité doit faire émerger la notion sans la donner directement.
- Prévoir une phase de recherche.
- Prévoir une mise en commun.
- Prévoir une trace écrite.

# Format attendu
1. Objectifs
2. Activité élève
3. Questions de relance
4. Trace écrite
5. Correction professeur
6. Points de vigilance`,auto:`# Rôle
Tu es professeur de mathématiques en classe de [niveau].

# Tâche
Crée une série de 10 questions flash sur [notion].

# Contraintes
- Chaque question doit pouvoir être faite en moins de 2 minutes.
- Les questions doivent être progressives.
- Prévoir 3 niveaux : direct, intermédiaire, vigilance.
- Ajouter les réponses à la fin.

# Format attendu
| Numéro | Question | Réponse | Niveau |
|---|---|---|---|`,complexe:`# Rôle
Tu es professeur de mathématiques en classe de [niveau].

# Tâche
Crée une tâche complexe sur [notion].

# Contraintes
- Situation réaliste
- Données exploitables
- Plusieurs stratégies possibles
- Coup de pouce progressif
- Grille d’évaluation

# Format attendu
1. Énoncé
2. Documents ou données
3. Questions
4. Coups de pouce
5. Grille d’évaluation
6. Correction détaillée`,latexprompt:`# Rôle
Tu es professeur de mathématiques et expert en LaTeX.

# Tâche
Transforme cette activité en document LaTeX compilable sur Overleaf.

# Contraintes LaTeX
- Classe article
- Packages : amsmath, amssymb, babel, geometry, tcolorbox
- Encadrés pour définition, méthode et remarque
- Correction à la fin
- Code directement compilable

# Contenu
\`\`\`text
[coller l’activité ici]
\`\`\``,verification:`# Rôle
Tu es professeur de mathématiques exigeant.

# Tâche
Vérifie la ressource suivante avant usage en classe.

# Points à contrôler
- Exactitude des définitions
- Exactitude des calculs
- Cohérence des notations
- Niveau réel
- Progressivité
- Faisabilité
- Erreurs possibles
- Ambiguïtés de consigne

# Format attendu
| Élément vérifié | Statut | Correction proposée |
|---|---|---|`};
const tabs=document.querySelectorAll(".tab");const promptContent=document.querySelector("#prompt-content code");tabs.forEach(tab=>{tab.addEventListener("click",()=>{tabs.forEach(item=>item.classList.remove("active"));tab.classList.add("active");promptContent.textContent=promptTemplates[tab.dataset.tab];});});
document.querySelectorAll(".copy-btn").forEach(button=>{button.addEventListener("click",async()=>{const target=document.getElementById(button.dataset.copyTarget);const text=target.innerText;try{await navigator.clipboard.writeText(text);const old=button.textContent;button.textContent="Copié ✓";setTimeout(()=>button.textContent=old,1400);}catch(e){alert("Impossible de copier automatiquement. Sélectionne le texte manuellement.");}});});
const menuToggle=document.querySelector(".menu-toggle");const navLinks=document.querySelector(".nav-links");menuToggle.addEventListener("click",()=>navLinks.classList.toggle("open"));navLinks.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>navLinks.classList.remove("open")));
