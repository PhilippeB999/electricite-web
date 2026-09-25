/* ============================================================
   ÉlectricitéQuest — Données du programme DEP 5295 (Électricité)
   Contenu converti depuis l'app source ElecQuest (React Native) vers le
   moteur web PWA (identique à SoudageQuest).
   Format moteur: COMPETENCIES[].tiers[].questions[] avec choices[{fr,en,correct}].
   ⚠️ Les questions (QCM, vrai/faux, mises en situation) sont des EXEMPLES à
   VALIDER par les enseignants du programme. Codes de module et heures = INDICATIFS.
   Les distracteurs des questions issues de « flashcards » sont marqués
   « (distracteur à valider) » : ils réutilisent de vraies réponses d'autres
   fiches comme leurres — à réviser par l'enseignant.
   ============================================================ */

const PROGRAM = {
  fr: { title: "Électricité", subtitle: "DEP 5295 — 1800 heures — 120 unités" },
  en: { title: "Electricity", subtitle: "DVS 5295 — 1800 hours — 120 credits" }
};

function ch(fr, en, correct) { return { fr, en, correct: !!correct }; }

/* Question de type vrai/faux: affirmation à juger. */
function tf(fr, en, isTrue) { return { type: "tf", fr, en, isTrue: !!isTrue }; }

/* Question de type "association de termes". */
function pair(term_fr, term_en, def_fr, def_en) { return { term_fr, term_en, def_fr, def_en }; }
function match(fr, en, pairs) { return { type: "match", fr, en, pairs }; }

/* Question de type "mise en situation": scénario + choix multiple. */
function scenario(fr, en, choices) { return { type: "scenario", fr, en, choices }; }

const TIER_META = [
  { level: 1, name_fr: "Débutant", name_en: "Beginner", icon: "🌱" },
  { level: 2, name_fr: "Intermédiaire", name_en: "Intermediate", icon: "⚙️" },
  { level: 3, name_fr: "Avancé", name_en: "Advanced", icon: "🏆" }
];

/* Chaque compétence = une "quête". order = ordre de déblocage. */
const COMPETENCIES = [
 {
  "id": "elec01",
  "order": 1,
  "code": "5295-01",
  "hours": 45,
  "title_fr": "Santé et sécurité au travail",
  "title_en": "Workplace Health & Safety",
  "icon": "🦺",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Qu'est-ce que le cadenassage (LOTO) ?",
      "en": "What is lockout/tagout (LOTO)?",
      "choices": [
       {
        "fr": "Une procédure qui consiste à isoler une source d'énergie et à verrouiller son dispositif de commande avant d'intervenir sur un équipement.",
        "en": "A procedure that involves isolating an energy source and locking its control device before working on equipment.",
        "correct": true
       },
       {
        "fr": "Commission des normes, de l'équité, de la santé et de la sécurité du travail. (distracteur à valider)",
        "en": "Commission des normes, de l'équité, de la santé et de la sécurité du travail (Quebec's workplace health and safety board). (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Parce que l'électricité peut sauter un arc dans l'air (arc électrique) sans contact direct, surtout à haute tension. (distracteur à valider)",
        "en": "Because electricity can jump through the air as an arc (arc flash) without direct contact, especially at high voltage. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Un espace fermé ou partiellement fermé, non conçu pour une occupation humaine continue, avec un accès restreint et une ventilation limitée. (distracteur à valider)",
        "en": "An enclosed or partially enclosed space, not designed for continuous human occupancy, with restricted access and limited ventilation. (distractor to validate)",
        "correct": false
       }
      ],
      "explFr": "Le but est d'empêcher toute remise sous tension accidentelle pendant que quelqu'un travaille sur l'installation. Chaque travailleur appose son propre cadenas personnel, dont lui seul possède la clé.",
      "explEn": "The goal is to prevent any accidental re-energization while someone is working on the installation. Each worker applies their own personal lock, and only they hold the key to it."
     },
     {
      "fr": "Que signifie l'acronyme CNESST ?",
      "en": "What does the acronym CNESST stand for?",
      "choices": [
       {
        "fr": "Commission des normes, de l'équité, de la santé et de la sécurité du travail.",
        "en": "Commission des normes, de l'équité, de la santé et de la sécurité du travail (Quebec's workplace health and safety board).",
        "correct": true
       },
       {
        "fr": "Parce que l'électricité peut sauter un arc dans l'air (arc électrique) sans contact direct, surtout à haute tension. (distracteur à valider)",
        "en": "Because electricity can jump through the air as an arc (arc flash) without direct contact, especially at high voltage. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Un espace fermé ou partiellement fermé, non conçu pour une occupation humaine continue, avec un accès restreint et une ventilation limitée. (distracteur à valider)",
        "en": "An enclosed or partially enclosed space, not designed for continuous human occupancy, with restricted access and limited ventilation. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Informer rapidement les travailleurs des dangers présents, des équipements verrouillés et des zones interdites. (distracteur à valider)",
        "en": "To quickly inform workers of present hazards, locked-out equipment, and restricted areas. (distractor to validate)",
        "correct": false
       }
      ],
      "explFr": "C'est l'organisme québécois responsable d'appliquer les lois sur la santé et la sécurité au travail, d'enquêter sur les accidents et d'indemniser les travailleurs blessés.",
      "explEn": "It's the Quebec government agency responsible for enforcing occupational health and safety laws, investigating accidents, and compensating injured workers."
     },
     {
      "fr": "Pourquoi les distances de sécurité près des lignes haute tension sont-elles cruciales ?",
      "en": "Why are safe approach distances near high-voltage lines so critical?",
      "choices": [
       {
        "fr": "Parce que l'électricité peut sauter un arc dans l'air (arc électrique) sans contact direct, surtout à haute tension.",
        "en": "Because electricity can jump through the air as an arc (arc flash) without direct contact, especially at high voltage.",
        "correct": true
       },
       {
        "fr": "Un espace fermé ou partiellement fermé, non conçu pour une occupation humaine continue, avec un accès restreint et une ventilation limitée. (distracteur à valider)",
        "en": "An enclosed or partially enclosed space, not designed for continuous human occupancy, with restricted access and limited ventilation. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Informer rapidement les travailleurs des dangers présents, des équipements verrouillés et des zones interdites. (distracteur à valider)",
        "en": "To quickly inform workers of present hazards, locked-out equipment, and restricted areas. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Une procédure qui consiste à isoler une source d'énergie et à verrouiller son dispositif de commande avant d'intervenir sur un équipement. (distracteur à valider)",
        "en": "A procedure that involves isolating an energy source and locking its control device before working on equipment. (distractor to validate)",
        "correct": false
       }
      ],
      "explFr": "Plus la tension est élevée, plus la distance minimale de sécurité doit être grande. Ces distances sont déterminées par les distributeurs d'électricité et doivent être respectées même avec des outils ou des échelles, pas seulement avec le corps.",
      "explEn": "The higher the voltage, the greater the required minimum safe distance. These distances are set by power utilities and must be maintained even with tools or ladders, not just with the body."
     },
     {
      "fr": "Qu'est-ce qu'un espace clos en milieu de travail ?",
      "en": "What is a confined space in the workplace?",
      "choices": [
       {
        "fr": "Un espace fermé ou partiellement fermé, non conçu pour une occupation humaine continue, avec un accès restreint et une ventilation limitée.",
        "en": "An enclosed or partially enclosed space, not designed for continuous human occupancy, with restricted access and limited ventilation.",
        "correct": true
       },
       {
        "fr": "Informer rapidement les travailleurs des dangers présents, des équipements verrouillés et des zones interdites. (distracteur à valider)",
        "en": "To quickly inform workers of present hazards, locked-out equipment, and restricted areas. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Une procédure qui consiste à isoler une source d'énergie et à verrouiller son dispositif de commande avant d'intervenir sur un équipement. (distracteur à valider)",
        "en": "A procedure that involves isolating an energy source and locking its control device before working on equipment. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Commission des normes, de l'équité, de la santé et de la sécurité du travail. (distracteur à valider)",
        "en": "Commission des normes, de l'équité, de la santé et de la sécurité du travail (Quebec's workplace health and safety board). (distractor to validate)",
        "correct": false
       }
      ],
      "explFr": "Exemples : réservoirs, fosses, vides sanitaires, certains tunnels de câblage. Un permis d'entrée et des tests d'atmosphère sont souvent requis avant d'y entrer.",
      "explEn": "Examples include tanks, pits, crawl spaces, and certain cable tunnels. An entry permit and atmospheric testing are often required before entering."
     },
     {
      "fr": "Quel est le rôle de l'étiquetage et de l'affichage de sécurité (signalisation) sur un chantier électrique ?",
      "en": "What is the role of safety labeling and signage on an electrical job site?",
      "choices": [
       {
        "fr": "Informer rapidement les travailleurs des dangers présents, des équipements verrouillés et des zones interdites.",
        "en": "To quickly inform workers of present hazards, locked-out equipment, and restricted areas.",
        "correct": true
       },
       {
        "fr": "Une procédure qui consiste à isoler une source d'énergie et à verrouiller son dispositif de commande avant d'intervenir sur un équipement. (distracteur à valider)",
        "en": "A procedure that involves isolating an energy source and locking its control device before working on equipment. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Commission des normes, de l'équité, de la santé et de la sécurité du travail. (distracteur à valider)",
        "en": "Commission des normes, de l'équité, de la santé et de la sécurité du travail (Quebec's workplace health and safety board). (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Parce que l'électricité peut sauter un arc dans l'air (arc électrique) sans contact direct, surtout à haute tension. (distracteur à valider)",
        "en": "Because electricity can jump through the air as an arc (arc flash) without direct contact, especially at high voltage. (distractor to validate)",
        "correct": false
       }
      ],
      "explFr": "Une étiquette de cadenassage indique qui a verrouillé l'équipement et pourquoi. Des affiches de danger (haute tension, arc électrique) avertissent du risque avant même d'ouvrir un panneau ou un coffret.",
      "explEn": "A lockout tag indicates who locked out the equipment and why. Danger signs (high voltage, arc flash) warn of risk even before opening a panel or enclosure."
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Quel équipement de protection individuelle (ÉPI) est obligatoire pour travailler sur un panneau électrique sous tension ?",
      "en": "Which personal protective equipment (PPE) is required to work on an energized electrical panel?",
      "choices": [
       {
        "fr": "Des gants de travail en cuir ordinaires",
        "en": "Ordinary leather work gloves",
        "correct": false
       },
       {
        "fr": "Des gants isolants de classe appropriée et des lunettes de sécurité",
        "en": "Insulating gloves of the appropriate class and safety glasses",
        "correct": true
       },
       {
        "fr": "Une simple visière de soudage",
        "en": "A simple welding face shield",
        "correct": false
       },
       {
        "fr": "Aucun ÉPI si le panneau est neuf",
        "en": "No PPE if the panel is new",
        "correct": false
       }
      ],
      "explFr": "Les gants isolants doivent correspondre à la classe de tension du circuit, et des lunettes ou un écran facial protègent contre les projections en cas d'arc électrique. Le matériel doit être inspecté avant chaque usage.",
      "explEn": "Insulating gloves must match the voltage class of the circuit, and safety glasses or a face shield protect against flying particles in case of an arc flash. Equipment must be inspected before each use."
     },
     {
      "type": "tf",
      "fr": "Il est acceptable de retirer temporairement son cadenas personnel si un collègue te demande de terminer plus vite.",
      "en": "It's acceptable to temporarily remove your personal lock if a coworker asks you to finish faster.",
      "isTrue": false,
      "explFr": "Faux. Le cadenas personnel ne doit jamais être retiré par une autre personne que celle qui l'a installé, même sous pression. C'est une règle fondamentale du cadenassage : chacun contrôle sa propre sécurité.",
      "explEn": "False. A personal lock must never be removed by anyone other than the person who applied it, even under pressure. This is a fundamental rule of lockout/tagout: each worker controls their own safety."
     },
     {
      "fr": "Un collègue reçoit un choc électrique et reste accroché à un fil sous tension. Que dois-tu faire en premier ?",
      "en": "A coworker receives an electrical shock and remains in contact with an energized wire. What should you do first?",
      "choices": [
       {
        "fr": "Le tirer immédiatement par le bras pour le détacher",
        "en": "Immediately pull them away by the arm",
        "correct": false
       },
       {
        "fr": "Couper l'alimentation électrique à la source ou éloigner le conducteur avec un objet isolant non conducteur, sans le toucher directement",
        "en": "Cut the power at the source or move the conductor away with a non-conductive insulated object, without touching them directly",
        "correct": true
       },
       {
        "fr": "Lui verser de l'eau pour le réveiller",
        "en": "Pour water on them to wake them up",
        "correct": false
       },
       {
        "fr": "Appeler les premiers secours et attendre sans rien faire",
        "en": "Call emergency services and wait without doing anything",
        "correct": false
       }
      ],
      "explFr": "Toucher une personne encore en contact avec une source électrique peut t'électrocuter aussi. Il faut d'abord couper l'alimentation si possible, ou utiliser un objet sec et non conducteur pour l'éloigner, puis appeler les secours et amorcer les premiers soins (RCR si nécessaire).",
      "explEn": "Touching a person who is still in contact with an electrical source could electrocute you too. You must first cut the power if possible, or use a dry, non-conductive object to move them away, then call for help and begin first aid (CPR if needed)."
     },
     {
      "type": "tf",
      "fr": "Les classes d'arc électrique (Arc Flash) déterminent le niveau de protection thermique nécessaire selon l'énergie potentielle d'un arc.",
      "en": "Arc flash hazard categories determine the level of thermal protection needed based on the potential energy of an arc.",
      "isTrue": true,
      "explFr": "Vrai. Les vêtements et équipements résistants à l'arc sont classés selon leur capacité à limiter les brûlures lors d'un arc électrique. Le choix dépend de l'analyse de risque du site et de l'énergie incidente calculée.",
      "explEn": "True. Arc-rated clothing and equipment are classified according to their ability to limit burns during an arc flash. The choice depends on the site's risk assessment and the calculated incident energy."
     },
     {
      "fr": "Quelle est une cause fréquente d'incendies d'origine électrique dans les bâtiments résidentiels ?",
      "en": "What is a common cause of electrical fires in residential buildings?",
      "choices": [
       {
        "fr": "Les connexions desserrées ou défectueuses qui causent une surchauffe",
        "en": "Loose or faulty connections that cause overheating",
        "correct": true
       },
       {
        "fr": "L'utilisation de DEL au lieu d'ampoules incandescentes",
        "en": "Using LED bulbs instead of incandescent bulbs",
        "correct": false
       },
       {
        "fr": "La couleur du fil utilisé",
        "en": "The color of the wire used",
        "correct": false
       },
       {
        "fr": "Le fait d'avoir trop de prises dans une pièce",
        "en": "Having too many outlets in a room",
        "correct": false
       }
      ],
      "explFr": "Une connexion mal serrée crée une résistance localisée qui produit de la chaleur excessive, pouvant carboniser l'isolant et déclencher un incendie. C'est pourquoi le serrage adéquat des bornes selon le couple recommandé est essentiel.",
      "explEn": "A poorly tightened connection creates localized resistance that produces excess heat, which can char insulation and start a fire. That's why tightening terminals to the recommended torque is essential."
     },
     {
      "fr": "Quel type d'extincteur est sécuritaire à utiliser sur un feu d'origine électrique lorsque l'alimentation n'a pas pu être coupée ?",
      "en": "What type of fire extinguisher is safe to use on an electrical fire when the power could not be shut off?",
      "choices": [
       {
        "fr": "Un extincteur à eau, car elle refroidit rapidement les équipements",
        "en": "A water extinguisher, because it cools equipment quickly",
        "correct": false
       },
       {
        "fr": "Un extincteur de classe C (souvent combiné en ABC), qui utilise un agent non conducteur",
        "en": "A Class C extinguisher (often combined as ABC), which uses a non-conductive agent",
        "correct": true
       },
       {
        "fr": "Peu importe le type, tous les extincteurs sont équivalents",
        "en": "It doesn't matter, all extinguishers are equivalent",
        "correct": false
       },
       {
        "fr": "Aucun extincteur ne doit jamais être utilisé près d'un équipement électrique",
        "en": "No extinguisher should ever be used near electrical equipment",
        "correct": false
       }
      ],
      "explFr": "Les extincteurs de classe C utilisent un agent non conducteur (souvent de la poudre chimique) qui est sécuritaire sur les équipements sous tension. L'eau conduit l'électricité et peut aggraver le danger en créant un chemin de courant vers la personne qui l'utilise.",
      "explEn": "Class C extinguishers use a non-conductive agent (often a chemical powder) that is safe on energized equipment. Water conducts electricity and can worsen the hazard by creating a current path to the person using it."
     },
     {
      "fr": "En santé et sécurité au travail, quelle affirmation décrit le mieux la différence entre un danger et un risque ?",
      "en": "In occupational health and safety, which statement best describes the difference between a hazard and a risk?",
      "choices": [
       {
        "fr": "Un danger et un risque sont des synonymes interchangeables",
        "en": "A hazard and a risk are interchangeable synonyms",
        "correct": false
       },
       {
        "fr": "Un danger est une source potentielle de blessure, tandis qu'un risque dépend de la probabilité et de la gravité qu'une blessure survienne à cause de ce danger",
        "en": "A hazard is a potential source of injury, while a risk depends on the probability and severity of an injury actually occurring from that hazard",
        "correct": true
       },
       {
        "fr": "Un risque existe seulement si un accident s'est déjà produit",
        "en": "A risk only exists if an accident has already occurred",
        "correct": false
       },
       {
        "fr": "Un danger ne peut jamais être contrôlé, seul le risque peut l'être",
        "en": "A hazard can never be controlled, only the risk can",
        "correct": false
       }
      ],
      "explFr": "Un fil dénudé est un danger en soi. Le risque qu'il représente dépend du contexte : est-il accessible, sous tension, près de zones humides ? On gère les risques en éliminant ou en contrôlant les dangers à la source.",
      "explEn": "A bare wire is a hazard in itself. The risk it represents depends on context: is it accessible, energized, near wet areas? We manage risk by eliminating or controlling hazards at the source."
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "type": "scenario",
      "fr": "Tu dois remplacer une prise électrique dans une cuisine résidentielle. Le panneau électrique est au sous-sol, hors de ta vue, et tu travailles seul.\n\nQue fais-tu en premier avant de commencer le travail ?",
      "en": "You need to replace an electrical outlet in a residential kitchen. The electrical panel is in the basement, out of sight, and you're working alone.\n\nWhat should you do first before starting the job?",
      "choices": [
       {
        "fr": "Tu coupes le disjoncteur correspondant et tu vérifies l'absence de tension avec un testeur avant de toucher aux fils",
        "en": "Turn off the corresponding breaker and verify the absence of voltage with a tester before touching any wires",
        "correct": true
       },
       {
        "fr": "Tu travailles directement, les prises résidentielles sont à basse tension donc sans danger",
        "en": "Work directly on it, since residential outlets are low voltage and therefore safe",
        "correct": false
       },
       {
        "fr": "Tu demandes au client de surveiller le panneau pendant que tu travailles",
        "en": "Ask the homeowner to keep an eye on the panel while you work",
        "correct": false
       },
       {
        "fr": "Tu coupes le disjoncteur principal seulement après avoir terminé le travail",
        "en": "Turn off the main breaker only after finishing the job",
        "correct": false
       }
      ],
      "explFr": "Même à 120 V, un choc électrique peut être dangereux ou mortel. Il faut toujours couper l'alimentation au disjoncteur approprié ET confirmer l'absence de tension avec un appareil de mesure fiable avant de toucher aux conducteurs. Ne jamais se fier uniquement à la position du disjoncteur.",
      "explEn": "Even at 120 V, an electrical shock can be dangerous or fatal. You must always shut off power at the appropriate breaker AND confirm the absence of voltage with a reliable test instrument before touching any conductors. Never rely solely on the position of the breaker."
     },
     {
      "type": "scenario",
      "fr": "En installant un nouveau luminaire extérieur, tu remarques que l'échelle que tu dois utiliser devra être placée à proximité d'un fil de distribution aérien appartenant au réseau électrique.\n\nQuelle est la bonne approche ?",
      "en": "While installing a new outdoor light fixture, you notice the ladder you need to use will have to be placed near an overhead distribution line belonging to the power utility.\n\nWhat's the right approach?",
      "choices": [
       {
        "fr": "Travailler rapidement pour minimiser le temps d'exposition",
        "en": "Work quickly to minimize exposure time",
        "correct": false
       },
       {
        "fr": "Évaluer la distance par rapport à la ligne, respecter la distance minimale réglementaire et, si nécessaire, faire une demande au distributeur pour faire dévier ou couvrir la ligne",
        "en": "Assess the distance to the line, maintain the required minimum clearance, and if necessary, request that the utility reroute or cover the line",
        "correct": true
       },
       {
        "fr": "Utiliser une échelle en métal car elle est plus stable",
        "en": "Use a metal ladder because it's more stable",
        "correct": false
       },
       {
        "fr": "Ignorer la ligne puisque le travail se fait au sol",
        "en": "Ignore the line since the work is being done at ground level",
        "correct": false
       }
      ],
      "explFr": "Les lignes de distribution aériennes représentent un danger mortel même sans contact direct, à cause du risque d'arc. Il faut respecter les distances minimales prescrites, utiliser une échelle non conductrice (fibre de verre) et, au besoin, contacter le distributeur d'électricité avant de procéder.",
      "explEn": "Overhead distribution lines pose a deadly hazard even without direct contact, due to the risk of arcing. You must maintain the prescribed minimum clearances, use a non-conductive (fiberglass) ladder, and if needed, contact the utility before proceeding."
     },
     {
      "type": "scenario",
      "fr": "Ton superviseur te demande de remplacer un disjoncteur dans un panneau qui dessert toujours d'autres circuits actifs du bâtiment. Le panneau principal ne peut pas être coupé sans interrompre des équipements critiques (alarmes, réfrigération).\n\nQuelle est la meilleure pratique à suivre ?",
      "en": "Your supervisor asks you to replace a breaker in a panel that still feeds other active circuits in the building. The main panel cannot be shut off without interrupting critical equipment (alarms, refrigeration).\n\nWhat is the best practice to follow?",
      "choices": [
       {
        "fr": "Travailler rapidement sans couper le disjoncteur principal, car tu es expérimenté",
        "en": "Work quickly without shutting off the main breaker, since you're experienced",
        "correct": false
       },
       {
        "fr": "Couper uniquement le disjoncteur concerné, vérifier l'absence de tension sur ce circuit précis, cadenasser ce disjoncteur, et porter les ÉPI appropriés pour le travail à proximité de pièces sous tension",
        "en": "Turn off only the breaker in question, verify the absence of voltage on that specific circuit, lock out that breaker, and wear appropriate PPE for working near energized parts",
        "correct": true
       },
       {
        "fr": "Refuser complètement le travail tant que tout le bâtiment n'est pas hors tension",
        "en": "Refuse to do the work entirely until the whole building is de-energized",
        "correct": false
       },
       {
        "fr": "Demander à un collègue de tenir les fils pendant que tu travailles",
        "en": "Ask a coworker to hold the wires while you work",
        "correct": false
       }
      ],
      "explFr": "Quand une coupure complète n'est pas possible, on isole et cadenasse le circuit spécifique sur lequel on travaille, on confirme l'absence de tension avec un testeur, et on porte les ÉPI appropriés pour le travail à proximité d'éléments encore sous tension dans le panneau. La sécurité individuelle et collective doit être maintenue en tout temps.",
      "explEn": "When a complete shutdown isn't possible, you isolate and lock out the specific circuit you're working on, confirm the absence of voltage with a tester, and wear appropriate PPE for working near energized parts in the panel. Individual and collective safety must be maintained at all times."
     }
    ]
   }
  ]
 },
 {
  "id": "elec02",
  "order": 2,
  "code": "5295-02",
  "hours": 90,
  "title_fr": "Circuits électriques de base",
  "title_en": "Basic Electrical Circuits",
  "icon": "⚡",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quelle est la formule de la loi d'Ohm ?",
      "en": "What is the formula for Ohm's Law?",
      "choices": [
       {
        "fr": "V = I × R (Tension = Courant × Résistance).",
        "en": "V = I × R (Voltage = Current × Resistance).",
        "correct": true
       },
       {
        "fr": "P = V × I (Puissance = Tension × Courant), exprimée en watts (W). (distracteur à valider)",
        "en": "P = V × I (Power = Voltage × Current), measured in watts (W). (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Le courant continu circule toujours dans la même direction, tandis que le courant alternatif change périodiquement de direction (oscille). (distracteur à valider)",
        "en": "Direct current always flows in the same direction, while alternating current periodically reverses direction (oscillates). (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Un système de distribution électrique utilisant trois conducteurs porteurs de courant alternatif déphasés de 120° l'un par rapport à l'autre. (distracteur à valider)",
        "en": "A power distribution system using three AC conductors that are 120° out of phase with each other. (distractor to validate)",
        "correct": false
       }
      ],
      "explFr": "Cette formule permet de calculer n'importe quelle valeur si on connaît les deux autres : I = V/R, ou R = V/I. C'est la base de tout calcul de circuit électrique.",
      "explEn": "This formula lets you calculate any value if you know the other two: I = V/R, or R = V/I. It's the foundation of all electrical circuit calculations."
     },
     {
      "fr": "Quelle est la formule de la puissance électrique en courant continu ?",
      "en": "What is the formula for electrical power in a DC circuit?",
      "choices": [
       {
        "fr": "P = V × I (Puissance = Tension × Courant), exprimée en watts (W).",
        "en": "P = V × I (Power = Voltage × Current), measured in watts (W).",
        "correct": true
       },
       {
        "fr": "Le courant continu circule toujours dans la même direction, tandis que le courant alternatif change périodiquement de direction (oscille). (distracteur à valider)",
        "en": "Direct current always flows in the same direction, while alternating current periodically reverses direction (oscillates). (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Un système de distribution électrique utilisant trois conducteurs porteurs de courant alternatif déphasés de 120° l'un par rapport à l'autre. (distracteur à valider)",
        "en": "A power distribution system using three AC conductors that are 120° out of phase with each other. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "L'opposition d'un matériau au passage du courant électrique, mesurée en ohms (Ω). (distracteur à valider)",
        "en": "A material's opposition to the flow of electric current, measured in ohms (Ω). (distractor to validate)",
        "correct": false
       }
      ],
      "explFr": "On peut aussi écrire P = I²R ou P = V²/R en combinant avec la loi d'Ohm. Ces formules permettent de calculer la consommation énergétique d'un appareil ou la chaleur dissipée dans une résistance.",
      "explEn": "It can also be written as P = I²R or P = V²/R by combining it with Ohm's Law. These formulas let you calculate the energy consumption of a device or the heat dissipated in a resistor."
     },
     {
      "fr": "Quelle est la principale différence entre le courant continu (CC) et le courant alternatif (CA) ?",
      "en": "What is the main difference between direct current (DC) and alternating current (AC)?",
      "choices": [
       {
        "fr": "Le courant continu circule toujours dans la même direction, tandis que le courant alternatif change périodiquement de direction (oscille).",
        "en": "Direct current always flows in the same direction, while alternating current periodically reverses direction (oscillates).",
        "correct": true
       },
       {
        "fr": "Un système de distribution électrique utilisant trois conducteurs porteurs de courant alternatif déphasés de 120° l'un par rapport à l'autre. (distracteur à valider)",
        "en": "A power distribution system using three AC conductors that are 120° out of phase with each other. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "L'opposition d'un matériau au passage du courant électrique, mesurée en ohms (Ω). (distracteur à valider)",
        "en": "A material's opposition to the flow of electric current, measured in ohms (Ω). (distractor to validate)",
        "correct": false
       },
       {
        "fr": "V = I × R (Tension = Courant × Résistance). (distracteur à valider)",
        "en": "V = I × R (Voltage = Current × Resistance). (distractor to validate)",
        "correct": false
       }
      ],
      "explFr": "En Amérique du Nord, le courant alternatif résidentiel oscille à 60 Hz, soit 60 cycles par seconde. Le CC est typique des piles et batteries, tandis que le CA est utilisé pour la distribution électrique en raison de sa facilité de transport sur de longues distances.",
      "explEn": "In North America, residential AC oscillates at 60 Hz, or 60 cycles per second. DC is typical of batteries, while AC is used for power distribution due to how easily it can be transported over long distances."
     },
     {
      "fr": "Qu'est-ce qu'un système triphasé, en termes simples ?",
      "en": "What is a three-phase system, in simple terms?",
      "choices": [
       {
        "fr": "Un système de distribution électrique utilisant trois conducteurs porteurs de courant alternatif déphasés de 120° l'un par rapport à l'autre.",
        "en": "A power distribution system using three AC conductors that are 120° out of phase with each other.",
        "correct": true
       },
       {
        "fr": "L'opposition d'un matériau au passage du courant électrique, mesurée en ohms (Ω). (distracteur à valider)",
        "en": "A material's opposition to the flow of electric current, measured in ohms (Ω). (distractor to validate)",
        "correct": false
       },
       {
        "fr": "V = I × R (Tension = Courant × Résistance). (distracteur à valider)",
        "en": "V = I × R (Voltage = Current × Resistance). (distractor to validate)",
        "correct": false
       },
       {
        "fr": "P = V × I (Puissance = Tension × Courant), exprimée en watts (W). (distracteur à valider)",
        "en": "P = V × I (Power = Voltage × Current), measured in watts (W). (distractor to validate)",
        "correct": false
       }
      ],
      "explFr": "Le triphasé est couramment utilisé pour alimenter de gros moteurs et équipements industriels parce qu'il offre une puissance plus stable et constante que le monophasé, avec moins de pertes pour une même puissance transportée.",
      "explEn": "Three-phase power is commonly used to supply large motors and industrial equipment because it provides a more stable and constant power output than single-phase, with fewer losses for the same transmitted power."
     },
     {
      "fr": "Que représente la résistance électrique, intuitivement ?",
      "en": "What does electrical resistance represent, intuitively?",
      "choices": [
       {
        "fr": "L'opposition d'un matériau au passage du courant électrique, mesurée en ohms (Ω).",
        "en": "A material's opposition to the flow of electric current, measured in ohms (Ω).",
        "correct": true
       },
       {
        "fr": "V = I × R (Tension = Courant × Résistance). (distracteur à valider)",
        "en": "V = I × R (Voltage = Current × Resistance). (distractor to validate)",
        "correct": false
       },
       {
        "fr": "P = V × I (Puissance = Tension × Courant), exprimée en watts (W). (distracteur à valider)",
        "en": "P = V × I (Power = Voltage × Current), measured in watts (W). (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Le courant continu circule toujours dans la même direction, tandis que le courant alternatif change périodiquement de direction (oscille). (distracteur à valider)",
        "en": "Direct current always flows in the same direction, while alternating current periodically reverses direction (oscillates). (distractor to validate)",
        "correct": false
       }
      ],
      "explFr": "Plus la résistance est élevée, plus il faut de tension pour faire circuler un même courant. Les conducteurs comme le cuivre ont une résistance très faible, tandis que les isolants ont une résistance très élevée (presque infinie).",
      "explEn": "The higher the resistance, the more voltage is needed to push the same current through. Conductors like copper have very low resistance, while insulators have very high (nearly infinite) resistance."
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Dans un circuit série, que se passe-t-il si une des charges (ex. : une ampoule) est défectueuse (circuit ouvert) ?",
      "en": "In a series circuit, what happens if one of the loads (e.g., a light bulb) fails (open circuit)?",
      "choices": [
       {
        "fr": "Seule cette charge s'éteint, les autres continuent de fonctionner",
        "en": "Only that load turns off, the others keep working",
        "correct": false
       },
       {
        "fr": "Le courant ne circule plus dans tout le circuit, donc toutes les charges s'arrêtent",
        "en": "Current stops flowing through the entire circuit, so all loads turn off",
        "correct": true
       },
       {
        "fr": "Le courant double dans les autres charges",
        "en": "Current doubles in the other loads",
        "correct": false
       },
       {
        "fr": "Rien ne change, le circuit fonctionne normalement",
        "en": "Nothing changes, the circuit works normally",
        "correct": false
       }
      ],
      "explFr": "Dans un circuit série, il n'y a qu'un seul chemin pour le courant. Si ce chemin est coupé à un endroit, le courant ne peut plus circuler nulle part dans le circuit, et toutes les charges s'éteignent en même temps.",
      "explEn": "In a series circuit, there is only one path for current. If that path is broken anywhere, current can no longer flow through any part of the circuit, and all loads turn off at the same time."
     },
     {
      "type": "tf",
      "fr": "Dans un circuit parallèle, la tension est la même aux bornes de chaque branche, mais le courant peut différer selon la résistance de chaque branche.",
      "en": "In a parallel circuit, the voltage is the same across each branch, but the current can differ depending on the resistance of each branch.",
      "isTrue": true,
      "explFr": "Vrai. C'est une propriété fondamentale des circuits parallèles : toutes les branches sont soumises à la même tension d'alimentation, mais chaque branche tire un courant inversement proportionnel à sa résistance (I = V/R).",
      "explEn": "True. This is a fundamental property of parallel circuits: every branch is subjected to the same supply voltage, but each branch draws a current inversely proportional to its resistance (I = V/R)."
     },
     {
      "fr": "Selon la loi de Kirchhoff sur les courants (loi des nœuds), que peut-on dire des courants à un nœud d'un circuit ?",
      "en": "According to Kirchhoff's Current Law (junction rule), what can be said about the currents at a node in a circuit?",
      "choices": [
       {
        "fr": "La somme des courants entrants est toujours plus grande que celle des sortants",
        "en": "The sum of currents entering is always greater than the sum leaving",
        "correct": false
       },
       {
        "fr": "La somme des courants entrant dans un nœud est égale à la somme des courants qui en sortent",
        "en": "The sum of currents entering a node equals the sum of currents leaving it",
        "correct": true
       },
       {
        "fr": "Le courant disparaît au niveau du nœud",
        "en": "Current disappears at the node",
        "correct": false
       },
       {
        "fr": "Cette loi ne s'applique qu'aux circuits en courant alternatif",
        "en": "This law only applies to AC circuits",
        "correct": false
       }
      ],
      "explFr": "La loi des nœuds de Kirchhoff stipule que le courant ne peut ni apparaître ni disparaître à un point de jonction : tout ce qui entre dans un nœud doit en ressortir. C'est une application du principe de conservation de la charge électrique.",
      "explEn": "Kirchhoff's Current Law states that current can neither appear nor disappear at a junction point: everything that enters a node must leave it. This is an application of the conservation of electric charge."
     },
     {
      "type": "tf",
      "fr": "Dans un circuit purement résistif en courant alternatif, le facteur de puissance est de 1 (ou 100 %).",
      "en": "In a purely resistive AC circuit, the power factor is 1 (or 100%).",
      "isTrue": true,
      "explFr": "Vrai. Quand un circuit ne contient que des résistances (comme des éléments chauffants), la tension et le courant sont parfaitement en phase, donnant un facteur de puissance de 1. Les charges inductives ou capacitives (moteurs, ballasts) créent un déphasage qui réduit ce facteur.",
      "explEn": "True. When a circuit contains only resistances (like heating elements), voltage and current are perfectly in phase, giving a power factor of 1. Inductive or capacitive loads (motors, ballasts) create a phase shift that reduces this factor."
     },
     {
      "fr": "Que se passe-t-il à la résistance totale d'un circuit lorsqu'on ajoute une résistance supplémentaire EN SÉRIE ?",
      "en": "What happens to the total resistance of a circuit when you add an additional resistor IN SERIES?",
      "choices": [
       {
        "fr": "Elle diminue toujours",
        "en": "It always decreases",
        "correct": false
       },
       {
        "fr": "Elle reste la même",
        "en": "It stays the same",
        "correct": false
       },
       {
        "fr": "Elle augmente, car les résistances s'additionnent en série",
        "en": "It increases, because resistances add up in series",
        "correct": true
       },
       {
        "fr": "Elle devient nulle",
        "en": "It becomes zero",
        "correct": false
       }
      ],
      "explFr": "En série, la résistance totale est la somme de toutes les résistances individuelles (Rtotal = R1 + R2 + R3...). Ajouter une résistance augmente donc toujours la résistance totale et réduit le courant total si la tension reste constante.",
      "explEn": "In series, the total resistance is the sum of all individual resistances (Rtotal = R1 + R2 + R3...). Adding a resistor therefore always increases total resistance and reduces total current if the voltage stays constant."
     },
     {
      "fr": "Quelle conséquence pratique peut découler d'un mauvais facteur de puissance dans une installation commerciale ou industrielle ?",
      "en": "What practical consequence can result from a poor power factor in a commercial or industrial installation?",
      "choices": [
       {
        "fr": "Aucune, le facteur de puissance n'a qu'une valeur théorique",
        "en": "None, power factor is only a theoretical value",
        "correct": false
       },
       {
        "fr": "Le système transporte plus de courant que nécessaire pour fournir la puissance utile, ce qui augmente les pertes et peut entraîner des pénalités sur la facture d'électricité",
        "en": "The system carries more current than necessary to deliver useful power, increasing losses and potentially leading to penalties on the electricity bill",
        "correct": true
       },
       {
        "fr": "Les conducteurs deviennent automatiquement plus gros",
        "en": "The conductors automatically become larger",
        "correct": false
       },
       {
        "fr": "La tension fournie par le réseau double",
        "en": "The voltage supplied by the utility doubles",
        "correct": false
       }
      ],
      "explFr": "Un mauvais facteur de puissance signifie qu'une partie du courant circulant ne produit pas de travail utile. Le distributeur d'électricité doit malgré tout fournir ce courant supplémentaire, ce qui justifie souvent des pénalités appliquées aux gros consommateurs ayant un facteur de puissance faible.",
      "explEn": "A poor power factor means part of the circulating current does no useful work. The utility still has to supply that extra current, which often justifies penalties applied to large consumers with a low power factor."
     },
     {
      "fr": "Pourquoi le courant alternatif (CA) est-il privilégié pour le transport de l'électricité sur de longues distances ?",
      "en": "Why is alternating current (AC) preferred for transporting electricity over long distances?",
      "choices": [
       {
        "fr": "Parce qu'il est moins dangereux que le courant continu",
        "en": "Because it's less dangerous than direct current",
        "correct": false
       },
       {
        "fr": "Parce qu'il peut facilement être transformé à des tensions très élevées grâce aux transformateurs, ce qui réduit les pertes en ligne",
        "en": "Because it can easily be stepped up to very high voltages using transformers, which reduces line losses",
        "correct": true
       },
       {
        "fr": "Parce qu'il ne nécessite aucun conducteur de retour",
        "en": "Because it doesn't require a return conductor",
        "correct": false
       },
       {
        "fr": "Parce que les appareils domestiques ne peuvent fonctionner qu'en CA",
        "en": "Because household appliances can only run on AC",
        "correct": false
       }
      ],
      "explFr": "Transporter l'électricité à haute tension permet de réduire le courant pour une même puissance, ce qui diminue les pertes par effet Joule (chaleur dissipée dans les fils). Les transformateurs permettent de changer facilement la tension du CA, contrairement au CC qui nécessite des équipements plus coûteux pour ce faire.",
      "explEn": "Transmitting electricity at high voltage reduces current for the same power, which decreases losses from Joule heating (heat dissipated in the wires). Transformers can easily change AC voltage, unlike DC which requires more costly equipment to do so."
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "type": "scenario",
      "fr": "Tu mesures aux bornes d'une résistance de 10 ohms une tension de 120 volts dans un circuit de test en atelier.\n\nQuel est le courant qui circule dans cette résistance ?",
      "en": "You measure 120 volts across a 10-ohm resistor in a test circuit in the shop.\n\nWhat is the current flowing through this resistor?",
      "choices": [
       {
        "fr": "1 200 ampères",
        "en": "1,200 amperes",
        "correct": false
       },
       {
        "fr": "12 ampères",
        "en": "12 amperes",
        "correct": true
       },
       {
        "fr": "0,083 ampère",
        "en": "0.083 ampere",
        "correct": false
       },
       {
        "fr": "120 ampères",
        "en": "120 amperes",
        "correct": false
       }
      ],
      "explFr": "En appliquant la loi d'Ohm, I = V/R = 120/10 = 12 A. Ce calcul est essentiel pour vérifier qu'un circuit ne dépasse pas la capacité du conducteur ou du disjoncteur prévu.",
      "explEn": "Applying Ohm's Law, I = V/R = 120/10 = 12 A. This calculation is essential to verify that a circuit doesn't exceed the capacity of the conductor or breaker it's connected to."
     },
     {
      "type": "scenario",
      "fr": "Un apprenti branche deux résistances de 100 ohms chacune en parallèle sur une même source de 12 volts en laboratoire.\n\nQuelle est la résistance totale équivalente du circuit ?",
      "en": "An apprentice connects two 100-ohm resistors in parallel across the same 12-volt source in the lab.\n\nWhat is the total equivalent resistance of the circuit?",
      "choices": [
       {
        "fr": "200 ohms",
        "en": "200 ohms",
        "correct": false
       },
       {
        "fr": "100 ohms",
        "en": "100 ohms",
        "correct": false
       },
       {
        "fr": "50 ohms",
        "en": "50 ohms",
        "correct": true
       },
       {
        "fr": "12 ohms",
        "en": "12 ohms",
        "correct": false
       }
      ],
      "explFr": "Pour deux résistances égales en parallèle, la résistance équivalente est R/2, donc 100/2 = 50 ohms. La formule générale est 1/Rtotal = 1/R1 + 1/R2. En parallèle, la résistance totale est toujours plus petite que la plus petite résistance individuelle.",
      "explEn": "For two equal resistors in parallel, the equivalent resistance is R/2, so 100/2 = 50 ohms. The general formula is 1/Rtotal = 1/R1 + 1/R2. In parallel, the total resistance is always smaller than the smallest individual resistance."
     },
     {
      "type": "scenario",
      "fr": "Tu installes un petit circuit de test composé d'une pile de 9 volts et d'une seule ampoule (résistance de 45 ohms) branchée directement aux bornes.\n\nQuelle puissance, en watts, cette ampoule consomme-t-elle ?",
      "en": "You set up a small test circuit consisting of a 9-volt battery and a single bulb (resistance of 45 ohms) connected directly across its terminals.\n\nWhat power, in watts, does this bulb consume?",
      "choices": [
       {
        "fr": "0,2 W",
        "en": "0.2 W",
        "correct": false
       },
       {
        "fr": "1,8 W",
        "en": "1.8 W",
        "correct": true
       },
       {
        "fr": "5 W",
        "en": "5 W",
        "correct": false
       },
       {
        "fr": "405 W",
        "en": "405 W",
        "correct": false
       }
      ],
      "explFr": "D'abord on trouve le courant : I = V/R = 9/45 = 0,2 A. Ensuite, P = V × I = 9 × 0,2 = 1,8 W. On peut aussi vérifier avec P = I²R = (0,2)² × 45 = 1,8 W. Ces calculs sont utiles pour choisir des composants adaptés à la puissance attendue.",
      "explEn": "First find the current: I = V/R = 9/45 = 0.2 A. Then, P = V × I = 9 × 0.2 = 1.8 W. You can also verify with P = I²R = (0.2)² × 45 = 1.8 W. These calculations are useful for selecting components rated for the expected power."
     }
    ]
   }
  ]
 },
 {
  "id": "elec03",
  "order": 3,
  "code": "5295-03",
  "hours": 45,
  "title_fr": "Outils et instruments de mesure",
  "title_en": "Tools & Measuring Instruments",
  "icon": "🧰",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "À quoi sert un multimètre en électricité ?",
      "en": "What is a multimeter used for in electrical work?",
      "choices": [
       {
        "fr": "À mesurer la tension, le courant, la résistance et la continuité dans un circuit électrique.",
        "en": "To measure voltage, current, resistance, and continuity in an electrical circuit.",
        "correct": true
       },
       {
        "fr": "Un appareil qui détecte la présence de tension dans un conducteur ou un appareil sans contact électrique direct, généralement par signal sonore ou lumineux. (distracteur à valider)",
        "en": "A device that detects the presence of voltage in a conductor or appliance without direct electrical contact, usually via an audible or visual signal. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Pour garantir l'exactitude des lectures et la sécurité de l'utilisateur, car un instrument mal calibré peut donner des résultats faux ou dangereux. (distracteur à valider)",
        "en": "To ensure the accuracy of readings and the user's safety, since a poorly calibrated instrument can give false or dangerous results. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "La fonction de continuité, souvent accompagnée d'un signal sonore (bip) lorsque le circuit est complet. (distracteur à valider)",
        "en": "The continuity function, often accompanied by an audible beep when the circuit is complete. (distractor to validate)",
        "correct": false
       }
      ],
      "explFr": "C'est l'outil de diagnostic de base de tout électricien. Avant chaque mesure, il faut sélectionner la bonne fonction et le bon calibre, et vérifier l'état des sondes pour éviter les erreurs ou les dangers.",
      "explEn": "It's the basic diagnostic tool of every electrician. Before each measurement, you must select the right function and range, and check the condition of the probes to avoid errors or hazards."
     },
     {
      "fr": "Qu'est-ce qu'un testeur de tension sans contact (non-contact voltage tester) ?",
      "en": "What is a non-contact voltage tester?",
      "choices": [
       {
        "fr": "Un appareil qui détecte la présence de tension dans un conducteur ou un appareil sans contact électrique direct, généralement par signal sonore ou lumineux.",
        "en": "A device that detects the presence of voltage in a conductor or appliance without direct electrical contact, usually via an audible or visual signal.",
        "correct": true
       },
       {
        "fr": "Pour garantir l'exactitude des lectures et la sécurité de l'utilisateur, car un instrument mal calibré peut donner des résultats faux ou dangereux. (distracteur à valider)",
        "en": "To ensure the accuracy of readings and the user's safety, since a poorly calibrated instrument can give false or dangerous results. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "La fonction de continuité, souvent accompagnée d'un signal sonore (bip) lorsque le circuit est complet. (distracteur à valider)",
        "en": "The continuity function, often accompanied by an audible beep when the circuit is complete. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Le voltmètre se branche en parallèle (aux bornes) du composant, tandis que l'ampèremètre se branche en série (dans le chemin du courant). (distracteur à valider)",
        "en": "A voltmeter is connected in parallel (across the terminals) of a component, while an ammeter is connected in series (in the path of the current). (distractor to validate)",
        "correct": false
       }
      ],
      "explFr": "Pratique pour une vérification rapide, mais il ne remplace pas un multimètre pour confirmer l'absence totale de tension avant un travail, car il peut donner de faux résultats selon l'environnement ou la charge.",
      "explEn": "Handy for a quick check, but it doesn't replace a multimeter for confirming the complete absence of voltage before work, since it can give false results depending on the environment or load."
     },
     {
      "fr": "Pourquoi est-il important de calibrer régulièrement les instruments de mesure ?",
      "en": "Why is it important to regularly calibrate measuring instruments?",
      "choices": [
       {
        "fr": "Pour garantir l'exactitude des lectures et la sécurité de l'utilisateur, car un instrument mal calibré peut donner des résultats faux ou dangereux.",
        "en": "To ensure the accuracy of readings and the user's safety, since a poorly calibrated instrument can give false or dangerous results.",
        "correct": true
       },
       {
        "fr": "La fonction de continuité, souvent accompagnée d'un signal sonore (bip) lorsque le circuit est complet. (distracteur à valider)",
        "en": "The continuity function, often accompanied by an audible beep when the circuit is complete. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Le voltmètre se branche en parallèle (aux bornes) du composant, tandis que l'ampèremètre se branche en série (dans le chemin du courant). (distracteur à valider)",
        "en": "A voltmeter is connected in parallel (across the terminals) of a component, while an ammeter is connected in series (in the path of the current). (distractor to validate)",
        "correct": false
       },
       {
        "fr": "À mesurer la tension, le courant, la résistance et la continuité dans un circuit électrique. (distracteur à valider)",
        "en": "To measure voltage, current, resistance, and continuity in an electrical circuit. (distractor to validate)",
        "correct": false
       }
      ],
      "explFr": "La calibration consiste à comparer les mesures de l'appareil avec une référence connue et à ajuster si nécessaire. Les fabricants recommandent une fréquence de calibration, surtout pour les appareils utilisés dans des contextes critiques.",
      "explEn": "Calibration involves comparing the instrument's readings against a known reference and adjusting as needed. Manufacturers recommend a calibration frequency, especially for instruments used in critical applications."
     },
     {
      "fr": "Quelle fonction du multimètre permet de vérifier rapidement si un fil est rompu (circuit ouvert) ?",
      "en": "Which multimeter function lets you quickly check if a wire is broken (open circuit)?",
      "choices": [
       {
        "fr": "La fonction de continuité, souvent accompagnée d'un signal sonore (bip) lorsque le circuit est complet.",
        "en": "The continuity function, often accompanied by an audible beep when the circuit is complete.",
        "correct": true
       },
       {
        "fr": "Le voltmètre se branche en parallèle (aux bornes) du composant, tandis que l'ampèremètre se branche en série (dans le chemin du courant). (distracteur à valider)",
        "en": "A voltmeter is connected in parallel (across the terminals) of a component, while an ammeter is connected in series (in the path of the current). (distractor to validate)",
        "correct": false
       },
       {
        "fr": "À mesurer la tension, le courant, la résistance et la continuité dans un circuit électrique. (distracteur à valider)",
        "en": "To measure voltage, current, resistance, and continuity in an electrical circuit. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Un appareil qui détecte la présence de tension dans un conducteur ou un appareil sans contact électrique direct, généralement par signal sonore ou lumineux. (distracteur à valider)",
        "en": "A device that detects the presence of voltage in a conductor or appliance without direct electrical contact, usually via an audible or visual signal. (distractor to validate)",
        "correct": false
       }
      ],
      "explFr": "Cette mesure doit toujours se faire sur un circuit hors tension, car le multimètre envoie son propre petit courant pour détecter la continuité. Faire ce test sous tension peut endommager l'appareil ou donner des résultats erronés.",
      "explEn": "This measurement must always be done on a de-energized circuit, since the multimeter sends out its own small current to detect continuity. Performing this test on a live circuit can damage the meter or give incorrect results."
     },
     {
      "fr": "Quelle est la différence entre un voltmètre et un ampèremètre en termes de branchement ?",
      "en": "What is the difference between a voltmeter and an ammeter in terms of how they're connected?",
      "choices": [
       {
        "fr": "Le voltmètre se branche en parallèle (aux bornes) du composant, tandis que l'ampèremètre se branche en série (dans le chemin du courant).",
        "en": "A voltmeter is connected in parallel (across the terminals) of a component, while an ammeter is connected in series (in the path of the current).",
        "correct": true
       },
       {
        "fr": "À mesurer la tension, le courant, la résistance et la continuité dans un circuit électrique. (distracteur à valider)",
        "en": "To measure voltage, current, resistance, and continuity in an electrical circuit. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Un appareil qui détecte la présence de tension dans un conducteur ou un appareil sans contact électrique direct, généralement par signal sonore ou lumineux. (distracteur à valider)",
        "en": "A device that detects the presence of voltage in a conductor or appliance without direct electrical contact, usually via an audible or visual signal. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Pour garantir l'exactitude des lectures et la sécurité de l'utilisateur, car un instrument mal calibré peut donner des résultats faux ou dangereux. (distracteur à valider)",
        "en": "To ensure the accuracy of readings and the user's safety, since a poorly calibrated instrument can give false or dangerous results. (distractor to validate)",
        "correct": false
       }
      ],
      "explFr": "Brancher un ampèremètre en parallèle par erreur peut créer un court-circuit et endommager l'appareil ou causer un danger, car sa résistance interne est très faible. Les multimètres modernes combinent ces fonctions, mais la méthode de branchement reste différente selon la mesure choisie.",
      "explEn": "Connecting an ammeter in parallel by mistake can create a short circuit and damage the meter or cause a hazard, since its internal resistance is very low. Modern multimeters combine these functions, but the connection method still differs depending on the measurement chosen."
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pour mesurer le courant qui circule dans un conducteur SANS ouvrir le circuit, quel outil utilises-tu ?",
      "en": "To measure the current flowing through a conductor WITHOUT opening the circuit, which tool do you use?",
      "choices": [
       {
        "fr": "Un mégohmmètre",
        "en": "A megohmmeter",
        "correct": false
       },
       {
        "fr": "Une pince ampèremétrique",
        "en": "A clamp meter",
        "correct": true
       },
       {
        "fr": "Un testeur de continuité",
        "en": "A continuity tester",
        "correct": false
       },
       {
        "fr": "Un niveau à bulle",
        "en": "A spirit level",
        "correct": false
       }
      ],
      "explFr": "La pince ampèremétrique se referme autour d'un conducteur et mesure le champ magnétique généré par le courant, sans avoir besoin de couper le fil ou d'interrompre le circuit. C'est beaucoup plus rapide et sécuritaire qu'un ampèremètre en série.",
      "explEn": "A clamp meter closes around a conductor and measures the magnetic field generated by the current, without needing to cut the wire or interrupt the circuit. It's much faster and safer than an in-line ammeter."
     },
     {
      "type": "tf",
      "fr": "Un mégohmmètre (megger) sert à tester la qualité de l'isolation des conducteurs en appliquant une tension élevée.",
      "en": "A megohmmeter (megger) is used to test the quality of conductor insulation by applying a high voltage.",
      "isTrue": true,
      "explFr": "Vrai. Le mégohmmètre injecte une tension continue élevée (souvent 500 V ou 1000 V) pour mesurer la résistance d'isolation entre un conducteur et la terre, ou entre deux conducteurs. Une faible résistance d'isolation indique un isolant détérioré ou humide.",
      "explEn": "True. The megohmmeter injects a high DC voltage (often 500 V or 1000 V) to measure the insulation resistance between a conductor and ground, or between two conductors. A low insulation resistance indicates deteriorated or damp insulation."
     },
     {
      "fr": "Quel outil manuel permet de retirer l'isolant d'un conducteur sans endommager le cuivre à l'intérieur ?",
      "en": "Which hand tool removes the insulation from a conductor without damaging the copper underneath?",
      "choices": [
       {
        "fr": "Une pince à dénuder",
        "en": "Wire strippers",
        "correct": true
       },
       {
        "fr": "Une pince à sertir",
        "en": "Crimping pliers",
        "correct": false
       },
       {
        "fr": "Un tournevis isolé",
        "en": "An insulated screwdriver",
        "correct": false
       },
       {
        "fr": "Une scie à métaux",
        "en": "A hacksaw",
        "correct": false
       }
      ],
      "explFr": "La pince à dénuder est conçue avec des lames calibrées pour couper l'isolant sans entailler le conducteur de cuivre. Un fil entaillé est plus fragile et peut casser ou surchauffer à l'endroit endommagé.",
      "explEn": "Wire strippers are designed with calibrated blades that cut through insulation without nicking the copper conductor. A nicked wire is weaker and can break or overheat at the damaged spot."
     },
     {
      "type": "tf",
      "fr": "Les tournevis isolés portent une cote de tension maximale et doivent être inspectés régulièrement pour des fissures dans le revêtement isolant.",
      "en": "Insulated screwdrivers carry a maximum voltage rating and must be regularly inspected for cracks in the insulating coating.",
      "isTrue": true,
      "explFr": "Vrai. Un tournevis isolé endommagé perd sa capacité de protection. Il faut vérifier visuellement l'état de l'isolant avant chaque usage et le retirer du service s'il est fissuré, fondu ou usé.",
      "explEn": "True. A damaged insulated screwdriver loses its protective capability. Its insulation must be visually inspected before each use and removed from service if it's cracked, melted, or worn."
     },
     {
      "fr": "Avant d'utiliser un multimètre pour mesurer une tension inconnue, que devrais-tu faire concernant le calibre (la plage) de mesure ?",
      "en": "Before using a multimeter to measure an unknown voltage, what should you do regarding the measurement range?",
      "choices": [
       {
        "fr": "Choisir toujours le calibre le plus bas pour plus de précision",
        "en": "Always select the lowest range for more precision",
        "correct": false
       },
       {
        "fr": "Sélectionner un calibre supérieur à la tension attendue, ou utiliser la fonction de calibrage automatique (auto-range) si disponible",
        "en": "Select a range higher than the expected voltage, or use the auto-range function if available",
        "correct": true
       },
       {
        "fr": "Le calibre n'a aucune importance pour la sécurité",
        "en": "The range doesn't matter for safety",
        "correct": false
       },
       {
        "fr": "Retirer les sondes avant de changer de calibre, peu importe le contexte",
        "en": "Remove the probes before changing the range, regardless of the situation",
        "correct": false
       }
      ],
      "explFr": "Choisir un calibre trop bas pour une tension élevée peut endommager l'appareil ou créer un danger pour l'utilisateur. Si on n'est pas certain de la tension, on commence par un calibre élevé (ou on utilise le mode automatique) puis on ajuste si nécessaire.",
      "explEn": "Selecting too low a range for a high voltage can damage the meter or create a hazard for the user. If you're unsure of the voltage, start with a high range (or use auto-range mode) and then adjust as needed."
     },
     {
      "fr": "Que doit-on faire avant de mesurer la résistance d'un composant avec un multimètre ?",
      "en": "What must you do before measuring the resistance of a component with a multimeter?",
      "choices": [
       {
        "fr": "Augmenter la tension du circuit pour obtenir une lecture plus précise",
        "en": "Increase the circuit voltage to get a more precise reading",
        "correct": false
       },
       {
        "fr": "Couper complètement l'alimentation du circuit, car la mesure de résistance utilise une source interne au multimètre",
        "en": "Completely de-energize the circuit, since resistance measurement uses an internal source in the multimeter",
        "correct": true
       },
       {
        "fr": "Rien de particulier, on peut mesurer la résistance même sous tension",
        "en": "Nothing special, you can measure resistance even while energized",
        "correct": false
       },
       {
        "fr": "Retirer uniquement le neutre tout en laissant la phase branchée",
        "en": "Remove only the neutral while leaving the phase connected",
        "correct": false
       }
      ],
      "explFr": "La mesure de résistance utilise une petite source interne au multimètre. Si le circuit est encore sous tension externe, cela peut fausser la mesure, endommager l'appareil et représenter un danger pour l'utilisateur. Il faut toujours couper l'alimentation avant de mesurer la résistance.",
      "explEn": "Resistance measurement uses a small internal source in the multimeter. If the circuit is still externally energized, this can skew the reading, damage the meter, and pose a hazard to the user. Always de-energize the circuit before measuring resistance."
     },
     {
      "fr": "Pourquoi faut-il toujours inspecter visuellement les sondes et câbles d'un multimètre avant de l'utiliser ?",
      "en": "Why should you always visually inspect a multimeter's probes and leads before using it?",
      "choices": [
       {
        "fr": "Pour vérifier que la couleur des câbles correspond à la marque de l'appareil",
        "en": "To verify the wire color matches the brand of the device",
        "correct": false
       },
       {
        "fr": "Pour détecter tout dommage à l'isolant, fissure ou fil exposé qui pourrait exposer l'utilisateur à un choc électrique pendant la mesure",
        "en": "To detect any damaged insulation, cracks, or exposed wire that could expose the user to electrical shock during the measurement",
        "correct": true
       },
       {
        "fr": "C'est une étape optionnelle qui n'affecte pas la sécurité",
        "en": "It's an optional step that doesn't affect safety",
        "correct": false
       },
       {
        "fr": "Pour augmenter artificiellement la précision de l'appareil",
        "en": "To artificially increase the precision of the device",
        "correct": false
       }
      ],
      "explFr": "Des sondes endommagées peuvent exposer l'utilisateur à un choc électrique et donner des lectures erronées en raison d'une mauvaise connexion. Beaucoup d'entreprises exigent une inspection visuelle systématique des outils de mesure avant chaque quart de travail.",
      "explEn": "Damaged leads can expose the user to electrical shock and give incorrect readings due to poor connections. Many companies require a systematic visual inspection of measuring tools before each shift."
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "type": "scenario",
      "fr": "Tu dois vérifier qu'un circuit est bel et bien hors tension avant de commencer un travail de réparation sur une prise.\n\nQuelle est la procédure recommandée avec un multimètre ?",
      "en": "You need to verify that a circuit is actually de-energized before starting repair work on an outlet.\n\nWhat is the recommended procedure with a multimeter?",
      "choices": [
       {
        "fr": "Vérifier directement sur le circuit suspect, sans autre étape",
        "en": "Test directly on the suspect circuit, with no other step",
        "correct": false
       },
       {
        "fr": "Tester d'abord le multimètre sur une source connue sous tension, puis sur le circuit à vérifier, puis re-tester sur la source connue pour confirmer que l'appareil fonctionne toujours",
        "en": "Test the multimeter first on a known live source, then on the circuit to be checked, then re-test on the known source to confirm the meter is still working",
        "correct": true
       },
       {
        "fr": "Utiliser seulement le testeur sans contact, c'est suffisant",
        "en": "Use only the non-contact tester, that's sufficient",
        "correct": false
       },
       {
        "fr": "Demander à quelqu'un de toucher les fils pour voir s'il ressent un choc",
        "en": "Ask someone to touch the wires to see if they feel a shock",
        "correct": false
       }
      ],
      "explFr": "Cette méthode 'tester-vérifier-tester' garantit que le multimètre fonctionne correctement avant et après la vérification du circuit. Si l'appareil était défectueux et indiquait faussement '0 volt' sur un circuit sous tension, cela pourrait causer un accident grave.",
      "explEn": "This 'test-check-test' method guarantees the multimeter is working correctly both before and after checking the circuit. If the meter were faulty and falsely showed '0 volts' on a live circuit, it could cause a serious accident."
     },
     {
      "type": "scenario",
      "fr": "En atelier, tu dois sertir un connecteur à anneau sur l'extrémité d'un conducteur pour le raccorder à une borne de moteur.\n\nQuel outil et quelle méthode utilises-tu ?",
      "en": "In the shop, you need to crimp a ring terminal onto the end of a conductor to connect it to a motor terminal.\n\nWhich tool and method do you use?",
      "choices": [
       {
        "fr": "Une pince à sertir adaptée au type et au calibre du connecteur, en suivant les indications du fabricant",
        "en": "Crimping pliers matched to the type and gauge of the connector, following the manufacturer's instructions",
        "correct": true
       },
       {
        "fr": "Des pinces coupantes ordinaires, en pressant fort",
        "en": "Ordinary cutting pliers, pressing hard",
        "correct": false
       },
       {
        "fr": "Un marteau pour aplatir le connecteur sur le fil",
        "en": "A hammer to flatten the connector onto the wire",
        "correct": false
       },
       {
        "fr": "Du ruban électrique autour du connecteur, sans sertissage",
        "en": "Electrical tape wrapped around the connector, without crimping",
        "correct": false
       }
      ],
      "explFr": "Un sertissage adéquat avec l'outil approprié assure une connexion mécanique et électrique fiable, sans points chauds ni risque de déconnexion. Utiliser le mauvais outil peut endommager le connecteur ou le conducteur et créer un point de défaillance.",
      "explEn": "A proper crimp made with the correct tool ensures a reliable mechanical and electrical connection, without hot spots or risk of disconnection. Using the wrong tool can damage the connector or conductor and create a point of failure."
     },
     {
      "type": "scenario",
      "fr": "Un moteur triphasé semble avoir un enroulement défectueux après une inondation légère dans la salle mécanique. Tu veux vérifier l'état de l'isolation des enroulements par rapport au châssis du moteur.\n\nQuel instrument est le plus approprié pour ce test ?",
      "en": "A three-phase motor appears to have a faulty winding after a minor flooding event in the mechanical room. You want to check the insulation condition of the windings relative to the motor frame.\n\nWhich instrument is most appropriate for this test?",
      "choices": [
       {
        "fr": "Un voltmètre standard",
        "en": "A standard voltmeter",
        "correct": false
       },
       {
        "fr": "Un mégohmmètre (test d'isolation)",
        "en": "A megohmmeter (insulation test)",
        "correct": true
       },
       {
        "fr": "Une pince ampèremétrique",
        "en": "A clamp meter",
        "correct": false
       },
       {
        "fr": "Un thermomètre infrarouge",
        "en": "An infrared thermometer",
        "correct": false
       }
      ],
      "explFr": "Le mégohmmètre applique une tension continue élevée pour mesurer la résistance d'isolation entre les enroulements et le châssis (masse). Une valeur faible indique que l'humidité ou la détérioration a compromis l'isolant, ce qui pourrait causer un court-circuit à la terre.",
      "explEn": "The megohmmeter applies a high DC voltage to measure the insulation resistance between the windings and the frame (ground). A low value indicates that moisture or deterioration has compromised the insulation, which could cause a ground fault."
     }
    ]
   }
  ]
 },
 {
  "id": "elec04",
  "order": 4,
  "code": "5295-04",
  "hours": 60,
  "title_fr": "Lecture de plans et schémas",
  "title_en": "Reading Plans & Schematics",
  "icon": "📐",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quelle est la différence entre un schéma unifilaire et un schéma multifilaire ?",
      "en": "What is the difference between a single-line diagram and a multi-line (wiring) diagram?",
      "choices": [
       {
        "fr": "Le schéma unifilaire représente un circuit avec une seule ligne simplifiée (même s'il y a plusieurs conducteurs), tandis que le schéma multifilaire montre chaque conducteur individuellement avec ses connexions détaillées.",
        "en": "A single-line diagram represents a circuit with one simplified line (even if there are multiple conductors), while a multi-line diagram shows each conductor individually with its detailed connections.",
        "correct": true
       },
       {
        "fr": "Une représentation graphique de la logique de contrôle d'un circuit, où les éléments sont disposés comme les barreaux d'une échelle entre deux lignes verticales d'alimentation. (distracteur à valider)",
        "en": "A graphical representation of a circuit's control logic, where elements are arranged like the rungs of a ladder between two vertical power supply lines. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "La signification de chaque symbole utilisé dans le plan : type de prise, interrupteur, luminaire, panneau, sortie spécialisée, etc. (distracteur à valider)",
        "en": "The meaning of each symbol used in the plan: outlet type, switch, fixture, panel, specialized outlet, etc. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "À identifier clairement quel disjoncteur correspond à quelle zone ou quel équipement, facilitant l'entretien, le dépannage et la sécurité. (distracteur à valider)",
        "en": "To clearly identify which breaker corresponds to which area or equipment, making maintenance, troubleshooting, and safety easier. (distractor to validate)",
        "correct": false
       }
      ],
      "explFr": "Le schéma unifilaire est utile pour avoir une vue d'ensemble rapide d'une installation, tandis que le multifilaire est essentiel pour le câblage réel, car il montre exactement où chaque fil doit être raccordé.",
      "explEn": "A single-line diagram is useful for getting a quick overview of an installation, while a multi-line diagram is essential for actual wiring, since it shows exactly where each wire must be connected."
     },
     {
      "fr": "Qu'est-ce qu'un schéma de commande (diagramme à échelle ou 'ladder diagram') ?",
      "en": "What is a ladder diagram (control schematic)?",
      "choices": [
       {
        "fr": "Une représentation graphique de la logique de contrôle d'un circuit, où les éléments sont disposés comme les barreaux d'une échelle entre deux lignes verticales d'alimentation.",
        "en": "A graphical representation of a circuit's control logic, where elements are arranged like the rungs of a ladder between two vertical power supply lines.",
        "correct": true
       },
       {
        "fr": "La signification de chaque symbole utilisé dans le plan : type de prise, interrupteur, luminaire, panneau, sortie spécialisée, etc. (distracteur à valider)",
        "en": "The meaning of each symbol used in the plan: outlet type, switch, fixture, panel, specialized outlet, etc. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "À identifier clairement quel disjoncteur correspond à quelle zone ou quel équipement, facilitant l'entretien, le dépannage et la sécurité. (distracteur à valider)",
        "en": "To clearly identify which breaker corresponds to which area or equipment, making maintenance, troubleshooting, and safety easier. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Pour situer correctement chaque appareil électrique par rapport aux éléments physiques du bâtiment et planifier le trajet réel des conducteurs. (distracteur à valider)",
        "en": "To correctly locate each electrical device relative to the building's physical elements and plan the actual routing of conductors. (distractor to validate)",
        "correct": false
       }
      ],
      "explFr": "Ce type de schéma est très utilisé pour les circuits de commande de moteurs et d'automatismes industriels. Il facilite le dépannage car la logique (boutons, contacts, bobines) est lue de haut en bas, de gauche à droite.",
      "explEn": "This type of diagram is widely used for motor control circuits and industrial automation. It makes troubleshooting easier because the logic (buttons, contacts, coils) is read from top to bottom, left to right."
     },
     {
      "fr": "Que retrouve-t-on généralement dans la légende (ou liste des symboles) d'un plan électrique ?",
      "en": "What is typically found in the legend (or symbol list) of an electrical plan?",
      "choices": [
       {
        "fr": "La signification de chaque symbole utilisé dans le plan : type de prise, interrupteur, luminaire, panneau, sortie spécialisée, etc.",
        "en": "The meaning of each symbol used in the plan: outlet type, switch, fixture, panel, specialized outlet, etc.",
        "correct": true
       },
       {
        "fr": "À identifier clairement quel disjoncteur correspond à quelle zone ou quel équipement, facilitant l'entretien, le dépannage et la sécurité. (distracteur à valider)",
        "en": "To clearly identify which breaker corresponds to which area or equipment, making maintenance, troubleshooting, and safety easier. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Pour situer correctement chaque appareil électrique par rapport aux éléments physiques du bâtiment et planifier le trajet réel des conducteurs. (distracteur à valider)",
        "en": "To correctly locate each electrical device relative to the building's physical elements and plan the actual routing of conductors. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Le schéma unifilaire représente un circuit avec une seule ligne simplifiée (même s'il y a plusieurs conducteurs), tandis que le schéma multifilaire montre chaque conducteur individuellement avec ses connexions détaillées. (distracteur à valider)",
        "en": "A single-line diagram represents a circuit with one simplified line (even if there are multiple conductors), while a multi-line diagram shows each conductor individually with its detailed connections. (distractor to validate)",
        "correct": false
       }
      ],
      "explFr": "Sans la légende, il est facile de mal interpréter un symbole, surtout si le plan provient d'un autre bureau de dessin qui utilise des variantes graphiques légèrement différentes. Toujours consulter la légende avant de commencer la lecture du plan.",
      "explEn": "Without the legend, it's easy to misinterpret a symbol, especially if the plan comes from another drafting office that uses slightly different graphic variants. Always check the legend before reading a plan."
     },
     {
      "fr": "À quoi sert le repérage des circuits (numérotation) sur un plan et dans un panneau électrique ?",
      "en": "What is the purpose of circuit identification (numbering) on a plan and in an electrical panel?",
      "choices": [
       {
        "fr": "À identifier clairement quel disjoncteur correspond à quelle zone ou quel équipement, facilitant l'entretien, le dépannage et la sécurité.",
        "en": "To clearly identify which breaker corresponds to which area or equipment, making maintenance, troubleshooting, and safety easier.",
        "correct": true
       },
       {
        "fr": "Pour situer correctement chaque appareil électrique par rapport aux éléments physiques du bâtiment et planifier le trajet réel des conducteurs. (distracteur à valider)",
        "en": "To correctly locate each electrical device relative to the building's physical elements and plan the actual routing of conductors. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Le schéma unifilaire représente un circuit avec une seule ligne simplifiée (même s'il y a plusieurs conducteurs), tandis que le schéma multifilaire montre chaque conducteur individuellement avec ses connexions détaillées. (distracteur à valider)",
        "en": "A single-line diagram represents a circuit with one simplified line (even if there are multiple conductors), while a multi-line diagram shows each conductor individually with its detailed connections. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Une représentation graphique de la logique de contrôle d'un circuit, où les éléments sont disposés comme les barreaux d'une échelle entre deux lignes verticales d'alimentation. (distracteur à valider)",
        "en": "A graphical representation of a circuit's control logic, where elements are arranged like the rungs of a ladder between two vertical power supply lines. (distractor to validate)",
        "correct": false
       }
      ],
      "explFr": "Un panneau bien identifié permet de couper rapidement le bon circuit en cas d'urgence ou de travaux, sans devoir tester chaque disjoncteur. La feuille d'identification doit être tenue à jour après toute modification du câblage.",
      "explEn": "A well-labeled panel allows you to quickly shut off the correct circuit in an emergency or during work, without having to test every breaker. The identification chart must be kept up to date after any wiring changes."
     },
     {
      "fr": "Pourquoi est-il utile de superposer mentalement le plan électrique avec le plan d'architecture (murs, portes, fenêtres) ?",
      "en": "Why is it useful to mentally overlay the electrical plan with the architectural plan (walls, doors, windows)?",
      "choices": [
       {
        "fr": "Pour situer correctement chaque appareil électrique par rapport aux éléments physiques du bâtiment et planifier le trajet réel des conducteurs.",
        "en": "To correctly locate each electrical device relative to the building's physical elements and plan the actual routing of conductors.",
        "correct": true
       },
       {
        "fr": "Le schéma unifilaire représente un circuit avec une seule ligne simplifiée (même s'il y a plusieurs conducteurs), tandis que le schéma multifilaire montre chaque conducteur individuellement avec ses connexions détaillées. (distracteur à valider)",
        "en": "A single-line diagram represents a circuit with one simplified line (even if there are multiple conductors), while a multi-line diagram shows each conductor individually with its detailed connections. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Une représentation graphique de la logique de contrôle d'un circuit, où les éléments sont disposés comme les barreaux d'une échelle entre deux lignes verticales d'alimentation. (distracteur à valider)",
        "en": "A graphical representation of a circuit's control logic, where elements are arranged like the rungs of a ladder between two vertical power supply lines. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "La signification de chaque symbole utilisé dans le plan : type de prise, interrupteur, luminaire, panneau, sortie spécialisée, etc. (distracteur à valider)",
        "en": "The meaning of each symbol used in the plan: outlet type, switch, fixture, panel, specialized outlet, etc. (distractor to validate)",
        "correct": false
       }
      ],
      "explFr": "Cette superposition aide à anticiper les obstacles (poutres, conduits de ventilation, plomberie) et à choisir le meilleur chemin pour le câblage avant même de commencer les travaux, ce qui évite des reprises coûteuses.",
      "explEn": "This overlay helps anticipate obstacles (beams, ductwork, plumbing) and choose the best path for wiring before work even begins, avoiding costly rework."
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Sur un plan d'architecture résidentiel, que représente généralement un cercle avec une ligne courbe vers un interrupteur ?",
      "en": "On a residential floor plan, what does a circle with a curved line to a switch generally represent?",
      "choices": [
       {
        "fr": "Une prise de courant double",
        "en": "A duplex receptacle",
        "correct": false
       },
       {
        "fr": "Un luminaire commandé par cet interrupteur",
        "en": "A light fixture controlled by that switch",
        "correct": true
       },
       {
        "fr": "Une sortie de ventilation",
        "en": "A ventilation outlet",
        "correct": false
       },
       {
        "fr": "Un panneau électrique",
        "en": "An electrical panel",
        "correct": false
       }
      ],
      "explFr": "Le symbole du luminaire (souvent un cercle) reliée par une ligne courbe en pointillé à un interrupteur indique que ce luminaire est contrôlé par cet interrupteur. Cette convention permet de visualiser rapidement les circuits de commande sans tout détailler.",
      "explEn": "The light fixture symbol (often a circle) connected by a curved dashed line to a switch indicates that this fixture is controlled by that switch. This convention lets you quickly visualize control circuits without detailing everything."
     },
     {
      "type": "tf",
      "fr": "Les symboles électriques normalisés permettent à différents électriciens de comprendre un plan de la même façon, peu importe qui l'a dessiné.",
      "en": "Standardized electrical symbols allow different electricians to interpret a plan the same way, regardless of who drew it.",
      "isTrue": true,
      "explFr": "Vrai. La standardisation des symboles (prises, interrupteurs, luminaires, panneaux, etc.) assure une communication claire entre les concepteurs, les électriciens et les inspecteurs, réduisant les erreurs d'interprétation sur un chantier.",
      "explEn": "True. Standardizing symbols (outlets, switches, fixtures, panels, etc.) ensures clear communication between designers, electricians, and inspectors, reducing misinterpretation on the job site."
     },
     {
      "fr": "Sur un schéma multifilaire de commande, une bobine de contacteur identifiée 'M1' est généralement associée à quel autre élément sur le même schéma ?",
      "en": "On a control wiring diagram, a contactor coil labeled 'M1' is generally associated with which other element on the same diagram?",
      "choices": [
       {
        "fr": "Des contacts auxiliaires ou de puissance portant la même référence M1, situés ailleurs sur le schéma",
        "en": "Auxiliary or power contacts bearing the same reference M1, located elsewhere on the diagram",
        "correct": true
       },
       {
        "fr": "Aucun lien, chaque symbole est indépendant",
        "en": "No connection, each symbol is independent",
        "correct": false
       },
       {
        "fr": "Uniquement la mise à la terre du panneau",
        "en": "Only the panel's ground connection",
        "correct": false
       },
       {
        "fr": "La couleur du fil utilisé pour le câblage",
        "en": "The color of the wire used for wiring",
        "correct": false
       }
      ],
      "explFr": "Les références alphanumériques (comme M1) permettent de relier la bobine d'un contacteur à ses contacts associés ailleurs dans le schéma, même s'ils sont physiquement situés à un autre endroit du dessin. Repérer ces références est essentiel pour comprendre la logique complète d'un circuit de commande.",
      "explEn": "Alphanumeric references (like M1) link a contactor's coil to its associated contacts elsewhere in the diagram, even if they're physically located in another part of the drawing. Identifying these references is essential to understanding the complete logic of a control circuit."
     },
     {
      "type": "tf",
      "fr": "Un schéma unifilaire suffit toujours pour effectuer le câblage physique complet d'une installation, sans autre document.",
      "en": "A single-line diagram is always sufficient to complete the physical wiring of an installation, with no other document needed.",
      "isTrue": false,
      "explFr": "Faux. Le schéma unifilaire donne une vue d'ensemble, mais le câblage physique nécessite généralement un schéma multifilaire ou de raccordement plus détaillé, qui montre chaque conducteur, sa destination et ses connexions précises.",
      "explEn": "False. A single-line diagram gives an overview, but physical wiring generally requires a more detailed multi-line or connection diagram, which shows each conductor, its destination, and its precise connections."
     },
     {
      "fr": "Que représente généralement une flèche ou un trait incliné partant d'un luminaire vers le haut sur un plan de plafond ?",
      "en": "What does an arrow or slanted line running from a fixture upward on a ceiling plan generally represent?",
      "choices": [
       {
        "fr": "Le sens d'ouverture d'une porte",
        "en": "The direction a door opens",
        "correct": false
       },
       {
        "fr": "Le circuit de commande reliant ce luminaire à son interrupteur",
        "en": "The control circuit connecting that fixture to its switch",
        "correct": true
       },
       {
        "fr": "La direction du vent dominant",
        "en": "The direction of the prevailing wind",
        "correct": false
       },
       {
        "fr": "L'emplacement d'une fenêtre",
        "en": "The location of a window",
        "correct": false
       }
      ],
      "explFr": "Sur les plans électriques, les traits en arc ou inclinés (souvent en pointillés) entre un luminaire et un interrupteur indiquent la relation de commande, c'est-à-dire quel interrupteur allume quel appareil d'éclairage.",
      "explEn": "On electrical plans, arced or slanted lines (often dashed) between a fixture and a switch indicate the control relationship, meaning which switch turns on which light fixture."
     },
     {
      "fr": "Que doit faire un électricien lorsqu'un plan électrique ne correspond plus à la réalité du chantier (obstacle imprévu, structure différente) ?",
      "en": "What should an electrician do when an electrical plan no longer matches the reality of the job site (unexpected obstacle, different structure)?",
      "choices": [
       {
        "fr": "Suivre le plan à la lettre, même si cela semble dangereux ou impossible sur le terrain",
        "en": "Follow the plan exactly, even if it seems dangerous or impossible on site",
        "correct": false
       },
       {
        "fr": "Signaler l'écart au superviseur ou au concepteur, pour s'assurer que tout ajustement respecte le code et la sécurité",
        "en": "Report the discrepancy to the supervisor or designer, to ensure any adjustment complies with the code and safety requirements",
        "correct": true
       },
       {
        "fr": "Modifier le plan original sans en informer personne",
        "en": "Modify the original plan without telling anyone",
        "correct": false
       },
       {
        "fr": "Abandonner le projet immédiatement",
        "en": "Abandon the project immediately",
        "correct": false
       }
      ],
      "explFr": "Les plans sont des guides, mais des conditions imprévues peuvent nécessiter des ajustements. L'électricien doit signaler les écarts importants afin que les changements soient validés et respectent toujours le code et la sécurité, plutôt que d'improviser seul ou de suivre aveuglément un plan inapplicable.",
      "explEn": "Plans are guides, but unforeseen conditions may require adjustments. The electrician must report significant discrepancies so that changes can be validated and always comply with code and safety, rather than improvising alone or blindly following an unworkable plan."
     },
     {
      "fr": "Sur un plan électrique, un symbole identifié 'panneau A' ou 'panneau 2' sert principalement à quoi ?",
      "en": "On an electrical plan, what is a symbol labeled 'panel A' or 'panel 2' mainly used for?",
      "choices": [
       {
        "fr": "À indiquer la couleur de peinture du mur environnant",
        "en": "To indicate the paint color of the surrounding wall",
        "correct": false
       },
       {
        "fr": "À identifier un panneau de distribution électrique précis et sa localisation, en lien avec les étiquettes de circuits qu'il contient",
        "en": "To identify a specific electrical distribution panel and its location, in connection with the circuit labels it contains",
        "correct": true
       },
       {
        "fr": "À indiquer l'emplacement d'une fenêtre",
        "en": "To indicate the location of a window",
        "correct": false
       },
       {
        "fr": "À montrer le chemin de câblage du téléphone uniquement",
        "en": "To show only the telephone wiring path",
        "correct": false
       }
      ],
      "explFr": "Chaque panneau a généralement une désignation unique qui correspond aux étiquettes de circuits qu'il contient, ce qui permet de retracer facilement quel panneau alimente quelle zone du bâtiment lors de l'installation ou du dépannage.",
      "explEn": "Each panel generally has a unique designation that corresponds to the circuit labels it contains, making it easy to trace which panel feeds which area of the building during installation or troubleshooting."
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "type": "scenario",
      "fr": "Tu arrives sur un chantier résidentiel et le plan électrique indique qu'un circuit numéro 14 alimente trois prises dans la cuisine, protégé par un disjoncteur de 20 A.\n\nQue dois-tu vérifier en priorité avant de commencer le câblage de ce circuit ?",
      "en": "You arrive at a residential job site, and the electrical plan shows that circuit number 14 feeds three outlets in the kitchen, protected by a 20 A breaker.\n\nWhat should you check first before starting to wire this circuit?",
      "choices": [
       {
        "fr": "Que le calibre de fil prévu (souvent AWG 12 pour 20 A) correspond à la protection indiquée sur le plan",
        "en": "That the planned wire gauge (often AWG 12 for 20 A) matches the protection shown on the plan",
        "correct": true
       },
       {
        "fr": "La couleur des prises uniquement",
        "en": "Only the color of the outlets",
        "correct": false
       },
       {
        "fr": "Le nombre total de circuits dans tout le bâtiment",
        "en": "The total number of circuits in the whole building",
        "correct": false
       },
       {
        "fr": "Si le plan est imprimé en couleur ou non",
        "en": "Whether the plan is printed in color or not",
        "correct": false
       }
      ],
      "explFr": "Le calibre du conducteur doit être adapté à l'ampérage du disjoncteur de protection. Un disjoncteur de 20 A nécessite généralement un conducteur AWG 12, alors qu'un circuit de 15 A utilise du AWG 14. Vérifier cette correspondance dès le départ évite des erreurs coûteuses.",
      "explEn": "The conductor gauge must match the amperage of the protective breaker. A 20 A breaker generally requires AWG 12 conductor, while a 15 A circuit uses AWG 14. Checking this match from the start avoids costly mistakes."
     },
     {
      "type": "scenario",
      "fr": "En consultant le plan d'un bâtiment commercial, tu remarques qu'un même symbole de prise est suivi d'un petit indice 'GFCI' près des éviers d'une salle de personnel.\n\nQue comprends-tu de cette annotation ?",
      "en": "While reviewing the plan for a commercial building, you notice that an outlet symbol is followed by a small 'GFCI' note near the sinks in a staff room.\n\nWhat does this annotation mean?",
      "choices": [
       {
        "fr": "Que cette prise doit être installée avec une protection contre les fuites à la terre, généralement requise près des points d'eau",
        "en": "That this outlet must be installed with ground-fault protection, generally required near water sources",
        "correct": true
       },
       {
        "fr": "Que cette prise doit être peinte en vert",
        "en": "That this outlet must be painted green",
        "correct": false
       },
       {
        "fr": "Que cette prise n'a pas besoin de mise à la terre",
        "en": "That this outlet doesn't need a ground connection",
        "correct": false
       },
       {
        "fr": "Que cette prise est purement décorative",
        "en": "That this outlet is purely decorative",
        "correct": false
       }
      ],
      "explFr": "L'indication GFCI (ou DDFT) sur un plan signale que cette prise doit offrir une protection contre les fuites à la terre, une exigence courante près des éviers, des salles de bain et des zones humides pour réduire les risques de choc électrique.",
      "explEn": "The GFCI notation on a plan indicates that this outlet must provide ground-fault protection, a common requirement near sinks, bathrooms, and damp areas to reduce the risk of electrical shock."
     },
     {
      "type": "scenario",
      "fr": "Tu reçois un schéma de commande pour un système de pompe avec un interrupteur de niveau (flotteur), un contacteur et un relais de surcharge. Le schéma montre que le contact du flotteur est en série avec la bobine du contacteur.\n\nComment interprètes-tu cette configuration ?",
      "en": "You receive a control diagram for a pump system with a level switch (float), a contactor, and an overload relay. The diagram shows that the float contact is in series with the contactor coil.\n\nHow do you interpret this configuration?",
      "choices": [
       {
        "fr": "La pompe démarre seulement lorsque le contact du flotteur se ferme, activant la bobine du contacteur qui alimente le moteur",
        "en": "The pump starts only when the float contact closes, energizing the contactor coil that powers the motor",
        "correct": true
       },
       {
        "fr": "Le flotteur n'a aucun effet sur le fonctionnement de la pompe",
        "en": "The float has no effect on the pump's operation",
        "correct": false
       },
       {
        "fr": "Le relais de surcharge démarre la pompe automatiquement",
        "en": "The overload relay starts the pump automatically",
        "correct": false
       },
       {
        "fr": "La pompe fonctionne en continu peu importe le niveau d'eau",
        "en": "The pump runs continuously regardless of water level",
        "correct": false
       }
      ],
      "explFr": "Dans un schéma de commande, des éléments en série dans le circuit de la bobine doivent tous être fermés (actifs) pour que la bobine soit alimentée. Si le contact du flotteur est en série avec la bobine, la pompe ne démarre que lorsque ce contact se ferme, typiquement quand le niveau d'eau atteint un certain seuil.",
      "explEn": "In a control diagram, elements in series with the coil circuit must all be closed (active) for the coil to be energized. If the float contact is in series with the coil, the pump starts only when that contact closes, typically when the water level reaches a certain threshold."
     }
    ]
   }
  ]
 },
 {
  "id": "elec05",
  "order": 5,
  "code": "5295-05",
  "hours": 90,
  "title_fr": "Câblage résidentiel",
  "title_en": "Residential Wiring",
  "icon": "🏠",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Qu'est-ce qu'un câble NMD90 (souvent appelé Romex) ?",
      "en": "What is NMD90 cable (often called Romex)?",
      "choices": [
       {
        "fr": "Un câble électrique non métallique gainé, couramment utilisé dans le câblage résidentiel intérieur, contenant généralement deux ou trois conducteurs isolés plus un conducteur de mise à la terre.",
        "en": "A non-metallic sheathed electrical cable commonly used in residential interior wiring, generally containing two or three insulated conductors plus a ground conductor.",
        "correct": true
       },
       {
        "fr": "Le simple allumage utilise un seul interrupteur pour contrôler un luminaire, tandis que le va-et-vient permet de contrôler le même luminaire à partir de deux endroits différents avec deux interrupteurs à trois bornes (interrupteurs trois voies). (distracteur à valider)",
        "en": "A single-pole setup uses one switch to control a fixture, while a three-way setup allows the same fixture to be controlled from two different locations using two three-way switches. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "La mise à la terre relie le système électrique et les parties métalliques à la terre elle-même, tandis que la liaison équipotentielle relie entre elles toutes les parties métalliques pour qu'elles soient au même potentiel électrique. (distracteur à valider)",
        "en": "Grounding connects the electrical system and metal parts to the earth itself, while bonding connects all metal parts together so they're at the same electrical potential. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Pour assurer une identification cohérente et sécuritaire des conducteurs par tous les électriciens qui pourraient travailler sur l'installation, maintenant ou dans le futur. (distracteur à valider)",
        "en": "To ensure consistent and safe identification of conductors by any electrician who might work on the installation, now or in the future. (distractor to validate)",
        "correct": false
       }
      ],
      "explFr": "Le 'D' du NMD90 indique qu'il est conçu pour un usage sec (Dry), et le '90' fait référence à la température nominale d'isolation en degrés Celsius. Il ne doit pas être utilisé dans des endroits humides ou enfouis sans protection appropriée.",
      "explEn": "The 'D' in NMD90 indicates it's rated for dry locations, and the '90' refers to the insulation's temperature rating in degrees Celsius. It must not be used in damp locations or buried without proper protection."
     },
     {
      "fr": "Quelle est la différence entre un montage simple allumage et un montage va-et-vient (à deux interrupteurs) ?",
      "en": "What is the difference between a single-pole switch setup and a three-way switch setup?",
      "choices": [
       {
        "fr": "Le simple allumage utilise un seul interrupteur pour contrôler un luminaire, tandis que le va-et-vient permet de contrôler le même luminaire à partir de deux endroits différents avec deux interrupteurs à trois bornes (interrupteurs trois voies).",
        "en": "A single-pole setup uses one switch to control a fixture, while a three-way setup allows the same fixture to be controlled from two different locations using two three-way switches.",
        "correct": true
       },
       {
        "fr": "La mise à la terre relie le système électrique et les parties métalliques à la terre elle-même, tandis que la liaison équipotentielle relie entre elles toutes les parties métalliques pour qu'elles soient au même potentiel électrique. (distracteur à valider)",
        "en": "Grounding connects the electrical system and metal parts to the earth itself, while bonding connects all metal parts together so they're at the same electrical potential. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Pour assurer une identification cohérente et sécuritaire des conducteurs par tous les électriciens qui pourraient travailler sur l'installation, maintenant ou dans le futur. (distracteur à valider)",
        "en": "To ensure consistent and safe identification of conductors by any electrician who might work on the installation, now or in the future. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "La capacité maximale de courant qu'un conducteur peut transporter de façon continue sans dépasser sa température nominale d'isolation. (distracteur à valider)",
        "en": "The maximum current a conductor can carry continuously without exceeding its insulation's temperature rating. (distractor to validate)",
        "correct": false
       }
      ],
      "explFr": "Le va-et-vient est couramment utilisé pour les escaliers ou les longs corridors, où il est pratique d'allumer la lumière d'un côté et de l'éteindre de l'autre. Il nécessite des interrupteurs spécifiques avec un conducteur de va-et-vient (souvent appelé 'travelers').",
      "explEn": "Three-way switching is commonly used for stairways or long hallways, where it's convenient to turn on the light from one end and off from the other. It requires special switches with a traveler conductor between them."
     },
     {
      "fr": "Quelle est la différence entre la mise à la terre et la liaison équipotentielle (bonding) ?",
      "en": "What is the difference between grounding and bonding?",
      "choices": [
       {
        "fr": "La mise à la terre relie le système électrique et les parties métalliques à la terre elle-même, tandis que la liaison équipotentielle relie entre elles toutes les parties métalliques pour qu'elles soient au même potentiel électrique.",
        "en": "Grounding connects the electrical system and metal parts to the earth itself, while bonding connects all metal parts together so they're at the same electrical potential.",
        "correct": true
       },
       {
        "fr": "Pour assurer une identification cohérente et sécuritaire des conducteurs par tous les électriciens qui pourraient travailler sur l'installation, maintenant ou dans le futur. (distracteur à valider)",
        "en": "To ensure consistent and safe identification of conductors by any electrician who might work on the installation, now or in the future. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "La capacité maximale de courant qu'un conducteur peut transporter de façon continue sans dépasser sa température nominale d'isolation. (distracteur à valider)",
        "en": "The maximum current a conductor can carry continuously without exceeding its insulation's temperature rating. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Un câble électrique non métallique gainé, couramment utilisé dans le câblage résidentiel intérieur, contenant généralement deux ou trois conducteurs isolés plus un conducteur de mise à la terre. (distracteur à valider)",
        "en": "A non-metallic sheathed electrical cable commonly used in residential interior wiring, generally containing two or three insulated conductors plus a ground conductor. (distractor to validate)",
        "correct": false
       }
      ],
      "explFr": "Les deux concepts travaillent ensemble : la liaison équipotentielle assure qu'aucune partie métallique accessible (boîtiers, tuyaux, châssis) ne devienne dangereuse par rapport à une autre, tandis que la mise à la terre donne un chemin de retour sécuritaire vers la source en cas de défaut.",
      "explEn": "Both concepts work together: bonding ensures no accessible metal part (enclosures, pipes, frames) becomes dangerous relative to another, while grounding provides a safe return path to the source in the event of a fault."
     },
     {
      "fr": "Pourquoi est-il important de respecter le code de couleur des conducteurs (ex. : blanc pour le neutre, vert ou nu pour la terre) ?",
      "en": "Why is it important to follow the color coding of conductors (e.g., white for neutral, green or bare for ground)?",
      "choices": [
       {
        "fr": "Pour assurer une identification cohérente et sécuritaire des conducteurs par tous les électriciens qui pourraient travailler sur l'installation, maintenant ou dans le futur.",
        "en": "To ensure consistent and safe identification of conductors by any electrician who might work on the installation, now or in the future.",
        "correct": true
       },
       {
        "fr": "La capacité maximale de courant qu'un conducteur peut transporter de façon continue sans dépasser sa température nominale d'isolation. (distracteur à valider)",
        "en": "The maximum current a conductor can carry continuously without exceeding its insulation's temperature rating. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Un câble électrique non métallique gainé, couramment utilisé dans le câblage résidentiel intérieur, contenant généralement deux ou trois conducteurs isolés plus un conducteur de mise à la terre. (distracteur à valider)",
        "en": "A non-metallic sheathed electrical cable commonly used in residential interior wiring, generally containing two or three insulated conductors plus a ground conductor. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Le simple allumage utilise un seul interrupteur pour contrôler un luminaire, tandis que le va-et-vient permet de contrôler le même luminaire à partir de deux endroits différents avec deux interrupteurs à trois bornes (interrupteurs trois voies). (distracteur à valider)",
        "en": "A single-pole setup uses one switch to control a fixture, while a three-way setup allows the same fixture to be controlled from two different locations using two three-way switches. (distractor to validate)",
        "correct": false
       }
      ],
      "explFr": "Inverser accidentellement un conducteur de neutre et un conducteur sous tension (par exemple en réutilisant un fil blanc comme conducteur actif sans le re-identifier) peut créer une situation dangereuse pour quiconque suppose que le fil blanc est toujours neutre. Le code de couleur est une convention de sécurité essentielle.",
      "explEn": "Accidentally swapping a neutral conductor with a hot conductor (for example, reusing a white wire as a hot conductor without re-marking it) can create a dangerous situation for anyone who assumes the white wire is always neutral. Color coding is an essential safety convention."
     },
     {
      "fr": "Qu'est-ce que l'ampacité d'un conducteur ?",
      "en": "What is the ampacity of a conductor?",
      "choices": [
       {
        "fr": "La capacité maximale de courant qu'un conducteur peut transporter de façon continue sans dépasser sa température nominale d'isolation.",
        "en": "The maximum current a conductor can carry continuously without exceeding its insulation's temperature rating.",
        "correct": true
       },
       {
        "fr": "Un câble électrique non métallique gainé, couramment utilisé dans le câblage résidentiel intérieur, contenant généralement deux ou trois conducteurs isolés plus un conducteur de mise à la terre. (distracteur à valider)",
        "en": "A non-metallic sheathed electrical cable commonly used in residential interior wiring, generally containing two or three insulated conductors plus a ground conductor. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Le simple allumage utilise un seul interrupteur pour contrôler un luminaire, tandis que le va-et-vient permet de contrôler le même luminaire à partir de deux endroits différents avec deux interrupteurs à trois bornes (interrupteurs trois voies). (distracteur à valider)",
        "en": "A single-pole setup uses one switch to control a fixture, while a three-way setup allows the same fixture to be controlled from two different locations using two three-way switches. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "La mise à la terre relie le système électrique et les parties métalliques à la terre elle-même, tandis que la liaison équipotentielle relie entre elles toutes les parties métalliques pour qu'elles soient au même potentiel électrique. (distracteur à valider)",
        "en": "Grounding connects the electrical system and metal parts to the earth itself, while bonding connects all metal parts together so they're at the same electrical potential. (distractor to validate)",
        "correct": false
       }
      ],
      "explFr": "L'ampacité dépend du calibre du conducteur, du matériau (cuivre ou aluminium), de la température ambiante, du type d'isolant et du nombre de conducteurs regroupés dans un même chemin de câbles. Dépasser l'ampacité cause une surchauffe progressive de l'isolant.",
      "explEn": "Ampacity depends on the conductor's gauge, material (copper or aluminum), ambient temperature, type of insulation, and the number of conductors bundled together in the same raceway. Exceeding ampacity causes progressive overheating of the insulation."
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Pour un circuit protégé par un disjoncteur de 15 ampères dans une installation résidentielle typique, quel calibre de fil de cuivre est généralement requis ?",
      "en": "For a circuit protected by a 15-amp breaker in a typical residential installation, what gauge of copper wire is generally required?",
      "choices": [
       {
        "fr": "AWG 14",
        "en": "AWG 14",
        "correct": true
       },
       {
        "fr": "AWG 10",
        "en": "AWG 10",
        "correct": false
       },
       {
        "fr": "AWG 6",
        "en": "AWG 6",
        "correct": false
       },
       {
        "fr": "AWG 2",
        "en": "AWG 2",
        "correct": false
       }
      ],
      "explFr": "En général, le AWG 14 est associé à une protection de 15 A, et le AWG 12 à 20 A pour le cuivre en usage résidentiel typique. Plus le numéro AWG est petit, plus le fil est gros et peut supporter un courant plus élevé (l'ampacité augmente quand le calibre diminue).",
      "explEn": "Generally, AWG 14 is paired with 15 A protection, and AWG 12 with 20 A for typical residential copper wiring. The smaller the AWG number, the larger the wire and the higher current it can carry (ampacity increases as gauge decreases)."
     },
     {
      "type": "tf",
      "fr": "Une boîte de jonction doit toujours rester accessible et ne peut pas être dissimulée derrière un mur fini sans trappe d'accès.",
      "en": "A junction box must always remain accessible and cannot be hidden behind a finished wall without an access panel.",
      "isTrue": true,
      "explFr": "Vrai. Les connexions de conducteurs doivent se trouver dans une boîte approuvée et demeurer accessibles pour l'inspection et l'entretien futur. Recouvrir une boîte de jonction de façon permanente (gypse, par exemple) est une pratique non conforme et dangereuse.",
      "explEn": "True. Conductor connections must be located in an approved box and remain accessible for inspection and future maintenance. Permanently covering a junction box (with drywall, for example) is a non-compliant and dangerous practice."
     },
     {
      "fr": "Quelle est la principale fonction d'un disjoncteur AFCI (protection contre les arcs électriques) ?",
      "en": "What is the main function of an AFCI breaker (arc fault protection)?",
      "choices": [
       {
        "fr": "Protéger uniquement contre les surtensions causées par la foudre",
        "en": "To protect only against surges caused by lightning",
        "correct": false
       },
       {
        "fr": "Détecter les signatures électriques caractéristiques d'arcs électriques dangereux (comme un fil endommagé) et couper le circuit avant qu'un incendie ne démarre",
        "en": "To detect the characteristic electrical signatures of dangerous arc faults (such as a damaged wire) and shut off the circuit before a fire starts",
        "correct": true
       },
       {
        "fr": "Réduire la consommation électrique du circuit",
        "en": "To reduce the circuit's power consumption",
        "correct": false
       },
       {
        "fr": "Remplacer la mise à la terre dans un circuit",
        "en": "To replace grounding in a circuit",
        "correct": false
       }
      ],
      "explFr": "Les arcs électriques peuvent se produire dans des fils endommagés, des connexions desserrées ou un isolant détérioré, et représentent une cause importante d'incendies résidentiels. Le AFCI surveille les formes d'onde du courant pour détecter ces arcs et coupe le circuit avant qu'un incendie ne se déclare, contrairement à un disjoncteur standard qui réagit aux surcharges et courts-circuits.",
      "explEn": "Arc faults can occur in damaged wires, loose connections, or deteriorated insulation, and are a major cause of residential fires. AFCIs monitor current waveforms to detect these arcs and shut off the circuit before a fire can start, unlike a standard breaker which only responds to overloads and short circuits."
     },
     {
      "type": "tf",
      "fr": "Un panneau électrique résidentiel doit avoir un espace de travail dégagé devant lui pour permettre un accès sécuritaire en cas d'urgence ou d'entretien.",
      "en": "A residential electrical panel must have a clear working space in front of it to allow safe access in case of emergency or maintenance.",
      "isTrue": true,
      "explFr": "Vrai. Un dégagement minimal devant le panneau est exigé pour permettre à un électricien d'intervenir rapidement et en sécurité, par exemple pour couper l'alimentation en cas d'urgence. Empiler des boîtes ou installer une étagère devant le panneau est non conforme.",
      "explEn": "True. A minimum clearance in front of the panel is required to allow an electrician to respond quickly and safely, for example to shut off power in an emergency. Stacking boxes or installing a shelf in front of the panel is non-compliant."
     },
     {
      "fr": "Que doit-on vérifier avant de raccorder un fil d'aluminium à un fil de cuivre dans une même boîte de jonction ?",
      "en": "What must you check before connecting an aluminum wire to a copper wire in the same junction box?",
      "choices": [
       {
        "fr": "Rien de particulier, ils sont interchangeables",
        "en": "Nothing in particular, they're interchangeable",
        "correct": false
       },
       {
        "fr": "Qu'un connecteur ou une méthode approuvée spécifiquement pour les connexions cuivre-aluminium est utilisée, en raison du risque de corrosion galvanique",
        "en": "That a connector or method specifically approved for copper-to-aluminum connections is used, due to the risk of galvanic corrosion",
        "correct": true
       },
       {
        "fr": "Que les deux fils ont exactement la même couleur d'isolant",
        "en": "That both wires have exactly the same insulation color",
        "correct": false
       },
       {
        "fr": "Que le fil d'aluminium est plus petit que le fil de cuivre",
        "en": "That the aluminum wire is smaller than the copper wire",
        "correct": false
       }
      ],
      "explFr": "Le contact direct entre cuivre et aluminium peut causer une corrosion galvanique qui dégrade la connexion avec le temps, créant un point chaud. Des connecteurs spécialement approuvés (souvent identifiés CU/AL ou avec une pâte anti-oxydante) doivent être utilisés pour ce type de raccordement.",
      "explEn": "Direct contact between copper and aluminum can cause galvanic corrosion that degrades the connection over time, creating a hot spot. Specially approved connectors (often marked CU/AL or used with anti-oxidant paste) must be used for this type of connection."
     },
     {
      "fr": "Pourquoi les prises de comptoir d'une cuisine résidentielle ne peuvent-elles généralement pas toutes être sur un seul circuit ?",
      "en": "Why can't all the countertop outlets in a residential kitchen generally be on a single circuit?",
      "choices": [
       {
        "fr": "Parce que c'est plus joli d'avoir plusieurs disjoncteurs",
        "en": "Because it's nicer to have several breakers",
        "correct": false
       },
       {
        "fr": "Parce que la forte demande électrique typique de la cuisine (grille-pain, bouilloire, four à micro-ondes) nécessite de répartir la charge sur plusieurs circuits dédiés pour éviter les surcharges fréquentes",
        "en": "Because the typical high electrical demand in a kitchen (toaster, kettle, microwave) requires spreading the load across several dedicated circuits to avoid frequent overloads",
        "correct": true
       },
       {
        "fr": "Parce que le code l'interdit pour des raisons esthétiques seulement",
        "en": "Because the code prohibits it purely for aesthetic reasons",
        "correct": false
       },
       {
        "fr": "Un seul circuit serait en fait toujours suffisant, peu importe le nombre d'appareils",
        "en": "A single circuit would actually always be sufficient, regardless of the number of appliances",
        "correct": false
       }
      ],
      "explFr": "Les cuisines ont des exigences particulières concernant le nombre de circuits dédiés en raison de la forte demande électrique typique de cette pièce. Répartir la charge sur plusieurs circuits évite les surcharges fréquentes et les déclenchements répétés du disjoncteur.",
      "explEn": "Kitchens have specific requirements regarding the number of dedicated circuits due to their typically high electrical demand. Spreading the load across multiple circuits prevents frequent overloads and repeated breaker trips."
     },
     {
      "fr": "Pourquoi les boîtes électriques ont-elles une capacité volumique maximale pour le nombre de conducteurs qu'elles peuvent contenir ?",
      "en": "Why do electrical boxes have a maximum volume capacity for the number of conductors they can hold?",
      "choices": [
       {
        "fr": "Pour limiter le poids total de la boîte",
        "en": "To limit the total weight of the box",
        "correct": false
       },
       {
        "fr": "Pour éviter le surremplissage, qui peut endommager l'isolant des fils et nuire à la dissipation de la chaleur générée par les connexions",
        "en": "To prevent overfilling, which can damage wire insulation and impede the dissipation of heat generated by connections",
        "correct": true
       },
       {
        "fr": "Parce que les boîtes plus grandes coûtent trop cher",
        "en": "Because larger boxes cost too much",
        "correct": false
       },
       {
        "fr": "Cette capacité n'a aucun lien avec la sécurité",
        "en": "This capacity has no relation to safety",
        "correct": false
       }
      ],
      "explFr": "Chaque conducteur, dispositif et connecteur occupe un volume théorique selon des tables de référence. Respecter cette capacité assure que les connexions peuvent être faites et entretenues sans forcer ni endommager les fils, et que la chaleur générée par les connexions peut se dissiper adéquatement.",
      "explEn": "Each conductor, device, and connector occupies a theoretical volume according to reference tables. Respecting this capacity ensures connections can be made and maintained without forcing or damaging wires, and that heat generated by connections can dissipate adequately."
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "type": "scenario",
      "fr": "Tu termines l'installation d'une nouvelle prise dans un garage. Le plan indique qu'elle doit être protégée contre les fuites à la terre, car elle est située près d'un évier de service.\n\nQuel dispositif dois-tu installer pour répondre à cette exigence ?",
      "en": "You're finishing the installation of a new outlet in a garage. The plan indicates it must have ground-fault protection, since it's located near a utility sink.\n\nWhat device must you install to meet this requirement?",
      "choices": [
       {
        "fr": "Une prise standard avec un fil de calibre plus gros",
        "en": "A standard outlet with a larger wire gauge",
        "correct": false
       },
       {
        "fr": "Une prise ou un disjoncteur avec protection DDFT (GFCI)",
        "en": "A GFCI outlet or breaker",
        "correct": true
       },
       {
        "fr": "Un interrupteur trois voies",
        "en": "A three-way switch",
        "correct": false
       },
       {
        "fr": "Un transformateur abaisseur de tension",
        "en": "A step-down transformer",
        "correct": false
       }
      ],
      "explFr": "Le disjoncteur de fuite à la terre (DDFT, ou GFCI en anglais) détecte les déséquilibres de courant qui pourraient indiquer une fuite vers la terre, par exemple à travers le corps humain, et coupe le circuit très rapidement. Ce type de protection est requis dans les zones humides comme les garages, salles de bain et extérieurs.",
      "explEn": "A GFCI (ground fault circuit interrupter) detects current imbalances that could indicate a leakage to ground, for example through the human body, and shuts off the circuit very quickly. This type of protection is required in damp areas like garages, bathrooms, and outdoors."
     },
     {
      "type": "scenario",
      "fr": "En rénovant une cuisine, tu dois ajouter un circuit dédié pour le four à micro-ondes encastré, qui exige sa propre protection selon les spécifications du fabricant.\n\nQuelle approche respecte les bonnes pratiques de câblage résidentiel ?",
      "en": "While renovating a kitchen, you need to add a dedicated circuit for the built-in microwave, which requires its own protection per the manufacturer's specifications.\n\nWhich approach follows good residential wiring practice?",
      "choices": [
       {
        "fr": "Brancher le four sur le même circuit que le réfrigérateur, car ils sont proches",
        "en": "Connect the microwave to the same circuit as the refrigerator since they're close together",
        "correct": false
       },
       {
        "fr": "Tirer un nouveau circuit dédié depuis le panneau, avec un calibre de fil et une protection adaptés à la puissance indiquée par le fabricant",
        "en": "Run a new dedicated circuit from the panel, with wire gauge and protection matched to the power rating specified by the manufacturer",
        "correct": true
       },
       {
        "fr": "Utiliser une rallonge électrique permanente derrière l'armoire",
        "en": "Use a permanent extension cord behind the cabinet",
        "correct": false
       },
       {
        "fr": "Réduire la puissance du four pour qu'il fonctionne sur un circuit existant déjà chargé",
        "en": "Reduce the power of the microwave so it works on an already-loaded existing circuit",
        "correct": false
       }
      ],
      "explFr": "Les appareils à forte puissance comme les fours encastrés nécessitent souvent un circuit dédié pour éviter les surcharges et respecter les exigences du fabricant (souvent indiquées sur la plaque signalétique). Partager un circuit avec d'autres appareils peut causer des déclenchements fréquents du disjoncteur ou une surchauffe.",
      "explEn": "High-power appliances like built-in ovens often require a dedicated circuit to avoid overloads and meet manufacturer requirements (often shown on the nameplate). Sharing a circuit with other appliances can cause frequent breaker trips or overheating."
     },
     {
      "type": "scenario",
      "fr": "Un propriétaire te demande d'ajouter une prise extérieure pour son barbecue électrique, sur le mur arrière de la maison.\n\nQuels éléments dois-tu absolument prévoir pour cette installation extérieure ?",
      "en": "A homeowner asks you to add an outdoor outlet for their electric barbecue, on the back wall of the house.\n\nWhat elements must you absolutely provide for this outdoor installation?",
      "choices": [
       {
        "fr": "Une prise standard intérieure recouverte de ruban électrique pour l'étanchéité",
        "en": "A standard indoor outlet wrapped in electrical tape for waterproofing",
        "correct": false
       },
       {
        "fr": "Une prise avec protection DDFT et un couvercle étanche (résistant aux intempéries) approprié pour un usage extérieur",
        "en": "A GFCI-protected outlet and an appropriate weatherproof cover rated for outdoor use",
        "correct": true
       },
       {
        "fr": "Aucune protection particulière, car c'est temporaire",
        "en": "No special protection, since it's temporary",
        "correct": false
       },
       {
        "fr": "Une rallonge passée par la fenêtre de la cuisine",
        "en": "An extension cord run through the kitchen window",
        "correct": false
       }
      ],
      "explFr": "Les prises extérieures doivent être protégées par un DDFT en raison du risque accru de contact avec l'humidité, et doivent être équipées d'un couvercle étanche conçu pour résister aux intempéries même lorsque la prise est utilisée (couvercle 'en usage').",
      "explEn": "Outdoor outlets must be GFCI-protected due to the increased risk of contact with moisture, and must be equipped with a weatherproof cover designed to withstand the elements even while the outlet is in use ('in-use' cover)."
     }
    ]
   }
  ]
 },
 {
  "id": "elec06",
  "order": 6,
  "code": "5295-06",
  "hours": 60,
  "title_fr": "Code de construction (CCQ/CNB)",
  "title_en": "Electrical Code (CCQ/CNB)",
  "icon": "📖",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Sur quel document national repose le chapitre Électricité du Code de construction du Québec ?",
      "en": "What national document is the Electrical chapter of the Quebec Construction Code based on?",
      "choices": [
       {
        "fr": "Le Code canadien de l'électricité (CSA C22.1), adapté et adopté avec des modifications par le Québec dans son chapitre V – Électricité.",
        "en": "The Canadian Electrical Code (CSA C22.1), adapted and adopted with amendments by Quebec in its Chapter V – Electricity.",
        "correct": true
       },
       {
        "fr": "Pour assurer qu'un suivi officiel des travaux est fait et qu'une inspection peut vérifier la conformité avec les normes en vigueur, protégeant ainsi la sécurité des occupants. (distracteur à valider)",
        "en": "To ensure official oversight of the work and that an inspection can verify compliance with applicable standards, protecting the safety of occupants. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Le conducteur doit pouvoir transporter le courant prévu sans surchauffer, et le dispositif de protection (disjoncteur/fusible) doit interrompre le circuit avant que cette limite ne soit dépassée de façon dangereuse. (distracteur à valider)",
        "en": "The conductor must be able to carry the expected current without overheating, and the protective device (breaker/fuse) must interrupt the circuit before that limit is dangerously exceeded. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Parce qu'il établit le niveau de sécurité de base acceptable, mais une installation peut (et parfois doit, selon le contexte) dépasser ces exigences pour offrir une meilleure sécurité ou fiabilité. (distracteur à valider)",
        "en": "Because it sets the acceptable baseline level of safety, but an installation can (and sometimes should, depending on context) exceed these requirements for better safety or reliability. (distractor to validate)",
        "correct": false
       }
      ],
      "explFr": "Le Code canadien de l'électricité établit les règles minimales de sécurité pour la conception, l'installation et l'entretien des installations électriques au Canada. Le Québec peut y ajouter des exigences particulières propres à sa réglementation.",
      "explEn": "The Canadian Electrical Code sets the minimum safety rules for the design, installation, and maintenance of electrical installations in Canada. Quebec may add its own specific requirements within its regulations."
     },
     {
      "fr": "Pourquoi un permis est-il généralement requis avant d'entreprendre des travaux électriques significatifs dans une résidence ?",
      "en": "Why is a permit generally required before undertaking significant electrical work in a residence?",
      "choices": [
       {
        "fr": "Pour assurer qu'un suivi officiel des travaux est fait et qu'une inspection peut vérifier la conformité avec les normes en vigueur, protégeant ainsi la sécurité des occupants.",
        "en": "To ensure official oversight of the work and that an inspection can verify compliance with applicable standards, protecting the safety of occupants.",
        "correct": true
       },
       {
        "fr": "Le conducteur doit pouvoir transporter le courant prévu sans surchauffer, et le dispositif de protection (disjoncteur/fusible) doit interrompre le circuit avant que cette limite ne soit dépassée de façon dangereuse. (distracteur à valider)",
        "en": "The conductor must be able to carry the expected current without overheating, and the protective device (breaker/fuse) must interrupt the circuit before that limit is dangerously exceeded. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Parce qu'il établit le niveau de sécurité de base acceptable, mais une installation peut (et parfois doit, selon le contexte) dépasser ces exigences pour offrir une meilleure sécurité ou fiabilité. (distracteur à valider)",
        "en": "Because it sets the acceptable baseline level of safety, but an installation can (and sometimes should, depending on context) exceed these requirements for better safety or reliability. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Vérifier que les travaux électriques réalisés respectent les normes applicables avant que les installations ne soient recouvertes ou mises en service. (distracteur à valider)",
        "en": "To verify that the electrical work performed meets applicable standards before the installations are covered or put into service. (distractor to validate)",
        "correct": false
       }
      ],
      "explFr": "Le processus de permis et d'inspection permet de détecter des installations dangereuses avant qu'elles ne soient dissimulées derrière des murs finis, et crée une trace officielle utile en cas de revente ou de réclamation d'assurance.",
      "explEn": "The permit and inspection process helps catch dangerous installations before they're hidden behind finished walls, and creates an official record useful for resale or insurance claims."
     },
     {
      "fr": "Quel principe général guide le dimensionnement des conducteurs et de leur protection contre les surintensités ?",
      "en": "What general principle guides the sizing of conductors and their overcurrent protection?",
      "choices": [
       {
        "fr": "Le conducteur doit pouvoir transporter le courant prévu sans surchauffer, et le dispositif de protection (disjoncteur/fusible) doit interrompre le circuit avant que cette limite ne soit dépassée de façon dangereuse.",
        "en": "The conductor must be able to carry the expected current without overheating, and the protective device (breaker/fuse) must interrupt the circuit before that limit is dangerously exceeded.",
        "correct": true
       },
       {
        "fr": "Parce qu'il établit le niveau de sécurité de base acceptable, mais une installation peut (et parfois doit, selon le contexte) dépasser ces exigences pour offrir une meilleure sécurité ou fiabilité. (distracteur à valider)",
        "en": "Because it sets the acceptable baseline level of safety, but an installation can (and sometimes should, depending on context) exceed these requirements for better safety or reliability. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Vérifier que les travaux électriques réalisés respectent les normes applicables avant que les installations ne soient recouvertes ou mises en service. (distracteur à valider)",
        "en": "To verify that the electrical work performed meets applicable standards before the installations are covered or put into service. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Le Code canadien de l'électricité (CSA C22.1), adapté et adopté avec des modifications par le Québec dans son chapitre V – Électricité. (distracteur à valider)",
        "en": "The Canadian Electrical Code (CSA C22.1), adapted and adopted with amendments by Quebec in its Chapter V – Electricity. (distractor to validate)",
        "correct": false
       }
      ],
      "explFr": "Ce principe protège à la fois contre les surcharges progressives (utilisation excessive) et les courts-circuits soudains (défaut). Le choix du calibre tient compte de facteurs comme la longueur du circuit, le regroupement de câbles et la température ambiante.",
      "explEn": "This principle protects against both gradual overloads (excessive use) and sudden short circuits (faults). Sizing takes into account factors such as circuit length, cable bundling, and ambient temperature."
     },
     {
      "fr": "Pourquoi le Code de l'électricité est-il considéré comme une norme minimale plutôt qu'un objectif à atteindre ?",
      "en": "Why is the Electrical Code considered a minimum standard rather than a target to aim for?",
      "choices": [
       {
        "fr": "Parce qu'il établit le niveau de sécurité de base acceptable, mais une installation peut (et parfois doit, selon le contexte) dépasser ces exigences pour offrir une meilleure sécurité ou fiabilité.",
        "en": "Because it sets the acceptable baseline level of safety, but an installation can (and sometimes should, depending on context) exceed these requirements for better safety or reliability.",
        "correct": true
       },
       {
        "fr": "Vérifier que les travaux électriques réalisés respectent les normes applicables avant que les installations ne soient recouvertes ou mises en service. (distracteur à valider)",
        "en": "To verify that the electrical work performed meets applicable standards before the installations are covered or put into service. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Le Code canadien de l'électricité (CSA C22.1), adapté et adopté avec des modifications par le Québec dans son chapitre V – Électricité. (distracteur à valider)",
        "en": "The Canadian Electrical Code (CSA C22.1), adapted and adopted with amendments by Quebec in its Chapter V – Electricity. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Pour assurer qu'un suivi officiel des travaux est fait et qu'une inspection peut vérifier la conformité avec les normes en vigueur, protégeant ainsi la sécurité des occupants. (distracteur à valider)",
        "en": "To ensure official oversight of the work and that an inspection can verify compliance with applicable standards, protecting the safety of occupants. (distractor to validate)",
        "correct": false
       }
      ],
      "explFr": "Par exemple, un électricien peut choisir un calibre de fil supérieur au minimum requis pour réduire les pertes de tension sur une longue distance, même si le minimum technique serait suffisant pour la protection contre les surintensités.",
      "explEn": "For example, an electrician might choose a larger wire gauge than the minimum required to reduce voltage drop over a long run, even if the technical minimum would be sufficient for overcurrent protection."
     },
     {
      "fr": "Quel est le rôle d'un inspecteur en électricité lors de la construction ou rénovation d'un bâtiment ?",
      "en": "What is the role of an electrical inspector during the construction or renovation of a building?",
      "choices": [
       {
        "fr": "Vérifier que les travaux électriques réalisés respectent les normes applicables avant que les installations ne soient recouvertes ou mises en service.",
        "en": "To verify that the electrical work performed meets applicable standards before the installations are covered or put into service.",
        "correct": true
       },
       {
        "fr": "Le Code canadien de l'électricité (CSA C22.1), adapté et adopté avec des modifications par le Québec dans son chapitre V – Électricité. (distracteur à valider)",
        "en": "The Canadian Electrical Code (CSA C22.1), adapted and adopted with amendments by Quebec in its Chapter V – Electricity. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Pour assurer qu'un suivi officiel des travaux est fait et qu'une inspection peut vérifier la conformité avec les normes en vigueur, protégeant ainsi la sécurité des occupants. (distracteur à valider)",
        "en": "To ensure official oversight of the work and that an inspection can verify compliance with applicable standards, protecting the safety of occupants. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Le conducteur doit pouvoir transporter le courant prévu sans surchauffer, et le dispositif de protection (disjoncteur/fusible) doit interrompre le circuit avant que cette limite ne soit dépassée de façon dangereuse. (distracteur à valider)",
        "en": "The conductor must be able to carry the expected current without overheating, and the protective device (breaker/fuse) must interrupt the circuit before that limit is dangerously exceeded. (distractor to validate)",
        "correct": false
       }
      ],
      "explFr": "L'inspection peut survenir à différentes étapes (avant la fermeture des murs, par exemple) pour permettre des corrections faciles si des non-conformités sont trouvées. Une fois les murs fermés, corriger un problème devient beaucoup plus coûteux et complexe.",
      "explEn": "Inspections can occur at different stages (before walls are closed up, for example) to allow easy corrections if non-compliances are found. Once walls are closed, fixing a problem becomes much more costly and complex."
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Quel est le rôle principal de la Régie du bâtiment du Québec (RBQ) en lien avec les travaux électriques ?",
      "en": "What is the main role of the Régie du bâtiment du Québec (RBQ) regarding electrical work?",
      "choices": [
       {
        "fr": "Fabriquer les disjoncteurs et panneaux électriques",
        "en": "Manufacture breakers and electrical panels",
        "correct": false
       },
       {
        "fr": "Encadrer la qualification des entrepreneurs, délivrer des licences et superviser certains aspects de la conformité du bâtiment",
        "en": "Oversee contractor qualification, issue licenses, and supervise certain aspects of building code compliance",
        "correct": true
       },
       {
        "fr": "Fixer le prix de l'électricité au Québec",
        "en": "Set the price of electricity in Quebec",
        "correct": false
       },
       {
        "fr": "Installer elle-même tous les circuits électriques résidentiels",
        "en": "Personally install all residential electrical circuits",
        "correct": false
       }
      ],
      "explFr": "La RBQ encadre notamment la qualification professionnelle des entrepreneurs en électricité, délivre les licences nécessaires pour exercer, et participe à l'application des normes de construction, incluant des inspections selon le contexte.",
      "explEn": "The RBQ oversees professional qualification of electrical contractors, issues the licenses required to practice, and participates in enforcing construction standards, including inspections depending on context."
     },
     {
      "type": "tf",
      "fr": "Selon les principes généraux reconnus, un conducteur doit toujours être protégé par un dispositif de protection contre les surintensités dont le calibre est adapté à l'ampacité de ce conducteur.",
      "en": "According to generally recognized principles, a conductor must always be protected by an overcurrent protective device sized appropriately for that conductor's ampacity.",
      "isTrue": true,
      "explFr": "Vrai. C'est un principe fondamental : la protection (fusible ou disjoncteur) doit correspondre à la capacité du conducteur qu'elle protège, afin que le dispositif réagisse avant que le conducteur ne surchauffe dangereusement.",
      "explEn": "True. This is a fundamental principle: the protection (fuse or breaker) must match the capacity of the conductor it protects, so the device trips before the conductor can overheat dangerously."
     },
     {
      "fr": "Quel est l'objectif général des règles de dégagement et de distance autour des panneaux électriques et équipements ?",
      "en": "What is the general purpose of clearance and distance rules around electrical panels and equipment?",
      "choices": [
       {
        "fr": "Améliorer l'apparence esthétique du sous-sol",
        "en": "Improve the aesthetic appearance of the basement",
        "correct": false
       },
       {
        "fr": "Permettre un accès sécuritaire pour l'entretien, l'inspection et les interventions d'urgence",
        "en": "Allow safe access for maintenance, inspection, and emergency response",
        "correct": true
       },
       {
        "fr": "Réduire le coût des matériaux de construction",
        "en": "Reduce construction material costs",
        "correct": false
       },
       {
        "fr": "Faciliter l'installation de rangement supplémentaire",
        "en": "Make room for additional storage",
        "correct": false
       }
      ],
      "explFr": "Les dégagements requis autour des équipements électriques visent avant tout la sécurité : ils permettent à un travailleur d'accéder rapidement aux commandes en cas d'urgence et d'effectuer l'entretien sans risque de contact accidentel avec des pièces sous tension.",
      "explEn": "Required clearances around electrical equipment are primarily about safety: they allow a worker to quickly access controls in an emergency and perform maintenance without risk of accidental contact with energized parts."
     },
     {
      "type": "tf",
      "fr": "Une fois qu'une installation électrique a été inspectée et approuvée, aucune modification future ne nécessite de nouvelle vérification, même si elle change la charge du circuit.",
      "en": "Once an electrical installation has been inspected and approved, no future modification ever requires a new inspection, even if it changes the circuit's load.",
      "isTrue": false,
      "explFr": "Faux. Toute modification significative d'une installation électrique (ajout de circuits, changement de charge importante, etc.) peut nécessiter un nouveau permis et une nouvelle inspection, car les conditions d'origine peuvent ne plus être respectées après la modification.",
      "explEn": "False. Any significant modification to an electrical installation (adding circuits, significant load changes, etc.) may require a new permit and a new inspection, since the original conditions may no longer be met after the change."
     },
     {
      "fr": "Pourquoi est-il important pour un électricien en formation de connaître les principes généraux du code, même sans mémoriser chaque article précis ?",
      "en": "Why is it important for an electrician in training to know the general principles of the code, even without memorizing every specific section?",
      "choices": [
       {
        "fr": "Parce que le code change trop souvent pour être utile",
        "en": "Because the code changes too often to be useful",
        "correct": false
       },
       {
        "fr": "Parce que comprendre les principes (protection, dégagement, mise à la terre, ampacité) permet de raisonner correctement face à des situations nouvelles et de savoir quand consulter la version officielle du code",
        "en": "Because understanding the principles (protection, clearance, grounding, ampacity) allows for sound reasoning in new situations and knowing when to consult the official code",
        "correct": true
       },
       {
        "fr": "Parce que les principes remplacent complètement le besoin de consulter le code",
        "en": "Because principles completely replace the need to consult the code",
        "correct": false
       },
       {
        "fr": "Parce que seuls les inspecteurs ont besoin de connaître le code",
        "en": "Because only inspectors need to know the code",
        "correct": false
       }
      ],
      "explFr": "Le code est un document technique détaillé qui évolue. Un bon électricien développe une compréhension des principes de sécurité sous-jacents, ce qui lui permet d'appliquer un jugement professionnel solide et de savoir reconnaître les situations où il doit vérifier la référence exacte dans le code en vigueur.",
      "explEn": "The code is a detailed technical document that evolves over time. A good electrician develops an understanding of the underlying safety principles, which allows them to apply sound professional judgment and recognize situations where they need to check the exact wording in the current code."
     },
     {
      "fr": "Le Code canadien de l'électricité et son adaptation québécoise s'appliquent-ils aux bâtiments existants ?",
      "en": "Does the Canadian Electrical Code and its Quebec adaptation apply to existing buildings?",
      "choices": [
       {
        "fr": "Non, uniquement aux nouvelles constructions",
        "en": "No, only to new construction",
        "correct": false
       },
       {
        "fr": "Oui : toute nouvelle installation, modification ou réparation dans un bâtiment existant doit généralement respecter le code en vigueur au moment des travaux",
        "en": "Yes: any new installation, modification, or repair in an existing building must generally meet the code in force at the time the work is performed",
        "correct": true
       },
       {
        "fr": "Seulement si le propriétaire en fait la demande explicite",
        "en": "Only if the owner explicitly requests it",
        "correct": false
       },
       {
        "fr": "Seulement pour les bâtiments commerciaux, jamais les résidences",
        "en": "Only for commercial buildings, never residences",
        "correct": false
       }
      ],
      "explFr": "Bien que les bâtiments existants conformes lors de leur construction ne soient pas toujours obligés de se mettre à niveau rétroactivement pour chaque changement de norme, toute nouvelle installation, modification ou réparation doit généralement respecter le code en vigueur au moment des travaux.",
      "explEn": "Although existing buildings that were compliant when built aren't always required to be retroactively upgraded for every code change, any new installation, modification, or repair must generally meet the code in force at the time the work is done."
     },
     {
      "fr": "Quel est l'avantage de documenter et conserver les plans 'tel que construit' (as-built) d'une installation électrique ?",
      "en": "What is the advantage of documenting and keeping 'as-built' plans of an electrical installation?",
      "choices": [
       {
        "fr": "Aucun avantage réel, ce sont des documents purement administratifs",
        "en": "No real advantage, they're purely administrative documents",
        "correct": false
       },
       {
        "fr": "Ils reflètent les modifications réelles faites pendant les travaux et facilitent grandement l'entretien, le dépannage et les futures rénovations",
        "en": "They reflect the actual changes made during the work and greatly facilitate maintenance, troubleshooting, and future renovations",
        "correct": true
       },
       {
        "fr": "Ils remplacent l'obligation d'obtenir un permis",
        "en": "They replace the need to obtain a permit",
        "correct": false
       },
       {
        "fr": "Ils servent uniquement à des fins de facturation",
        "en": "They're used only for billing purposes",
        "correct": false
       }
      ],
      "explFr": "Les plans initiaux peuvent différer de la réalisation finale en raison d'ajustements sur le chantier. Des plans 'tel que construit' à jour évitent à un futur électricien de deviner ou de retracer chaque circuit à l'aveugle, ce qui représente un gain de temps et de sécurité important.",
      "explEn": "Original plans can differ from the final result due to on-site adjustments. Up-to-date 'as-built' plans save a future electrician from guessing or tracing every circuit blindly, which represents a significant gain in time and safety."
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "type": "scenario",
      "fr": "Un client te demande de faire une installation électrique 'rapide et sans permis' pour économiser de l'argent, en te disant que personne ne le saura.\n\nQuelle est l'attitude professionnelle appropriée ?",
      "en": "A customer asks you to do an electrical installation 'quickly and without a permit' to save money, telling you no one will know.\n\nWhat is the appropriate professional attitude?",
      "choices": [
       {
        "fr": "Accepter, car c'est le client qui décide et qui assume le risque",
        "en": "Agree, since it's the customer's decision and they assume the risk",
        "correct": false
       },
       {
        "fr": "Expliquer au client l'importance des permis et inspections pour la sécurité et la conformité, et refuser de procéder à des travaux non conformes aux exigences applicables",
        "en": "Explain to the customer the importance of permits and inspections for safety and compliance, and refuse to perform work that doesn't meet applicable requirements",
        "correct": true
       },
       {
        "fr": "Faire le travail mais ne pas le facturer, pour éviter toute trace",
        "en": "Do the work but don't bill for it, to avoid leaving a trace",
        "correct": false
       },
       {
        "fr": "Faire le travail rapidement la nuit pour éviter d'être vu",
        "en": "Do the work quickly at night to avoid being seen",
        "correct": false
       }
      ],
      "explFr": "Un professionnel doit respecter les exigences réglementaires applicables et expliquer au client les risques (sécurité, assurance, revente) liés à des travaux non conformes. Accepter de contourner ces exigences expose le travailleur, l'entreprise et le client à des conséquences sérieuses.",
      "explEn": "A professional must follow applicable regulatory requirements and explain to the customer the risks (safety, insurance, resale) tied to non-compliant work. Agreeing to bypass these requirements exposes the worker, the company, and the customer to serious consequences."
     },
     {
      "type": "scenario",
      "fr": "Lors d'une inspection, l'inspecteur municipal signale que le panneau électrique que tu as installé n'a pas suffisamment d'espace libre devant lui, car une étagère de rangement a été placée trop près après les travaux.\n\nQuelle est la bonne réaction professionnelle ?",
      "en": "During an inspection, the municipal inspector points out that the electrical panel you installed doesn't have enough clearance in front of it, because a storage shelf was placed too close after the work was finished.\n\nWhat is the right professional response?",
      "choices": [
       {
        "fr": "Contester l'inspecteur en affirmant que l'étagère est temporaire",
        "en": "Argue with the inspector, claiming the shelf is temporary",
        "correct": false
       },
       {
        "fr": "Reconnaître l'observation, faire déplacer ou retirer l'étagère pour respecter le dégagement requis, et informer le client de l'importance de maintenir cet espace dégagé",
        "en": "Acknowledge the observation, have the shelf moved or removed to meet the required clearance, and inform the customer of the importance of keeping that space clear",
        "correct": true
       },
       {
        "fr": "Ignorer la remarque puisque le câblage lui-même est conforme",
        "en": "Ignore the comment since the wiring itself is compliant",
        "correct": false
       },
       {
        "fr": "Demander à l'inspecteur de fermer les yeux pour cette fois",
        "en": "Ask the inspector to overlook it just this once",
        "correct": false
       }
      ],
      "explFr": "Le dégagement devant un panneau électrique est une exigence de sécurité, peu importe que le câblage soit par ailleurs conforme. Un bon professionnel corrige la situation et explique au client pourquoi cet espace doit rester libre en permanence, pas seulement pour l'inspection.",
      "explEn": "Clearance in front of an electrical panel is a safety requirement, regardless of whether the wiring itself is compliant. A good professional corrects the situation and explains to the customer why this space must remain clear permanently, not just for the inspection."
     },
     {
      "type": "scenario",
      "fr": "Tu travailles comme apprenti et ton compagnon te demande de réaliser seul une connexion dans un panneau électrique sous tension, sans supervision directe, alors que ta formation et ton niveau de qualification ne le permettent pas encore selon les règles applicables.\n\nQue devrais-tu faire ?",
      "en": "You're working as an apprentice and your journeyman asks you to make a connection alone in an energized electrical panel, without direct supervision, even though your training and qualification level don't yet allow this under the applicable rules.\n\nWhat should you do?",
      "choices": [
       {
        "fr": "Accepter pour démontrer tes compétences et accélérer ton apprentissage",
        "en": "Agree to demonstrate your skills and speed up your learning",
        "correct": false
       },
       {
        "fr": "Exprimer poliment tes réserves, rappeler les exigences de supervision applicables à ton statut, et demander que la tâche soit supervisée ou reportée",
        "en": "Politely express your concerns, point out the supervision requirements that apply to your status, and ask for the task to be supervised or postponed",
        "correct": true
       },
       {
        "fr": "Faire le travail en cachette pour ne pas décevoir ton compagnon",
        "en": "Do the work secretly so as not to disappoint your journeyman",
        "correct": false
       },
       {
        "fr": "Quitter immédiatement le chantier sans explication",
        "en": "Leave the job site immediately without explanation",
        "correct": false
       }
      ],
      "explFr": "Les niveaux de supervision requis pour les apprentis existent pour protéger à la fois l'apprenti et la qualité du travail. Communiquer clairement ses limites de façon professionnelle, tout en proposant une solution (supervision ou report), est la bonne approche plutôt que d'accepter une tâche hors de son niveau de qualification.",
      "explEn": "Required supervision levels for apprentices exist to protect both the apprentice and the quality of the work. Clearly and professionally communicating your limits, while offering a solution (supervision or postponement), is the right approach rather than accepting a task beyond your qualification level."
     }
    ]
   }
  ]
 },
 {
  "id": "elec07",
  "order": 7,
  "code": "5295-07",
  "hours": 75,
  "title_fr": "Moteurs et commandes électriques",
  "title_en": "Motors & Electrical Controls",
  "icon": "⚙️",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quelle est la principale différence entre un moteur monophasé et un moteur triphasé ?",
      "en": "What is the main difference between a single-phase motor and a three-phase motor?",
      "choices": [
       {
        "fr": "Le moteur monophasé fonctionne avec une seule phase de courant alternatif et nécessite souvent un dispositif de démarrage (condensateur), tandis que le moteur triphasé utilise trois phases déphasées qui créent naturellement un champ magnétique tournant.",
        "en": "A single-phase motor runs on a single AC phase and often requires a starting device (capacitor), while a three-phase motor uses three out-of-phase currents that naturally create a rotating magnetic field.",
        "correct": true
       },
       {
        "fr": "En inversant deux des trois conducteurs d'alimentation (sur les trois), ce qui inverse l'ordre de la séquence de phases et donc le sens du champ magnétique tournant. (distracteur à valider)",
        "en": "By swapping two of the three supply conductors, which reverses the phase sequence order and therefore the direction of the rotating magnetic field. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Une méthode de démarrage pour moteurs triphasés où le moteur démarre d'abord en configuration étoile (tension réduite sur chaque enroulement), puis bascule en configuration triangle (pleine tension) une fois lancé. (distracteur à valider)",
        "en": "A starting method for three-phase motors where the motor first starts in a star (reduced voltage on each winding) configuration, then switches to a delta (full voltage) configuration once it's running. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Parce qu'il permet de détecter et corriger de petits problèmes (lubrification, alignement, propreté, connexions) avant qu'ils ne causent une panne majeure ou coûteuse. (distracteur à valider)",
        "en": "Because it allows small problems (lubrication, alignment, cleanliness, connections) to be detected and corrected before they cause a major or costly failure. (distractor to validate)",
        "correct": false
       }
      ],
      "explFr": "Les moteurs triphasés sont généralement plus simples, plus robustes et plus efficaces pour des puissances élevées, ce qui explique leur usage répandu dans l'industrie. Les moteurs monophasés restent courants pour de petits appareils résidentiels.",
      "explEn": "Three-phase motors are generally simpler, more rugged, and more efficient at higher power ratings, which explains their widespread use in industry. Single-phase motors remain common for small residential appliances."
     },
     {
      "fr": "Comment inverse-t-on généralement le sens de rotation d'un moteur triphasé ?",
      "en": "How is the rotation direction of a three-phase motor generally reversed?",
      "choices": [
       {
        "fr": "En inversant deux des trois conducteurs d'alimentation (sur les trois), ce qui inverse l'ordre de la séquence de phases et donc le sens du champ magnétique tournant.",
        "en": "By swapping two of the three supply conductors, which reverses the phase sequence order and therefore the direction of the rotating magnetic field.",
        "correct": true
       },
       {
        "fr": "Une méthode de démarrage pour moteurs triphasés où le moteur démarre d'abord en configuration étoile (tension réduite sur chaque enroulement), puis bascule en configuration triangle (pleine tension) une fois lancé. (distracteur à valider)",
        "en": "A starting method for three-phase motors where the motor first starts in a star (reduced voltage on each winding) configuration, then switches to a delta (full voltage) configuration once it's running. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Parce qu'il permet de détecter et corriger de petits problèmes (lubrification, alignement, propreté, connexions) avant qu'ils ne causent une panne majeure ou coûteuse. (distracteur à valider)",
        "en": "Because it allows small problems (lubrication, alignment, cleanliness, connections) to be detected and corrected before they cause a major or costly failure. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Un relais de commande est généralement conçu pour commuter de petits courants dans les circuits de contrôle, tandis qu'un contacteur est conçu pour commuter les courants plus élevés des circuits de puissance, comme l'alimentation d'un moteur. (distracteur à valider)",
        "en": "A control relay is generally designed to switch small currents in control circuits, while a contactor is designed to switch the higher currents of power circuits, such as a motor's power supply. (distractor to validate)",
        "correct": false
       }
      ],
      "explFr": "Cette inversion est souvent réalisée par deux contacteurs distincts dans un circuit de commande avant/arrière, avec un verrouillage électrique (et parfois mécanique) pour empêcher les deux contacteurs d'être activés simultanément, ce qui causerait un court-circuit entre phases.",
      "explEn": "This reversal is often achieved using two separate contactors in a forward/reverse control circuit, with an electrical (and sometimes mechanical) interlock to prevent both contactors from being activated at the same time, which would cause a short circuit between phases."
     },
     {
      "fr": "Qu'est-ce qu'un démarrage étoile-triangle, en termes simples ?",
      "en": "What is star-delta (wye-delta) starting, in simple terms?",
      "choices": [
       {
        "fr": "Une méthode de démarrage pour moteurs triphasés où le moteur démarre d'abord en configuration étoile (tension réduite sur chaque enroulement), puis bascule en configuration triangle (pleine tension) une fois lancé.",
        "en": "A starting method for three-phase motors where the motor first starts in a star (reduced voltage on each winding) configuration, then switches to a delta (full voltage) configuration once it's running.",
        "correct": true
       },
       {
        "fr": "Parce qu'il permet de détecter et corriger de petits problèmes (lubrification, alignement, propreté, connexions) avant qu'ils ne causent une panne majeure ou coûteuse. (distracteur à valider)",
        "en": "Because it allows small problems (lubrication, alignment, cleanliness, connections) to be detected and corrected before they cause a major or costly failure. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Un relais de commande est généralement conçu pour commuter de petits courants dans les circuits de contrôle, tandis qu'un contacteur est conçu pour commuter les courants plus élevés des circuits de puissance, comme l'alimentation d'un moteur. (distracteur à valider)",
        "en": "A control relay is generally designed to switch small currents in control circuits, while a contactor is designed to switch the higher currents of power circuits, such as a motor's power supply. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Le moteur monophasé fonctionne avec une seule phase de courant alternatif et nécessite souvent un dispositif de démarrage (condensateur), tandis que le moteur triphasé utilise trois phases déphasées qui créent naturellement un champ magnétique tournant. (distracteur à valider)",
        "en": "A single-phase motor runs on a single AC phase and often requires a starting device (capacitor), while a three-phase motor uses three out-of-phase currents that naturally create a rotating magnetic field. (distractor to validate)",
        "correct": false
       }
      ],
      "explFr": "Cette méthode réduit le courant d'appel au démarrage par rapport à un démarrage direct, ce qui est utile pour les gros moteurs afin de limiter les chutes de tension sur le réseau et les contraintes mécaniques au démarrage.",
      "explEn": "This method reduces the inrush current at startup compared to a direct-on-line start, which is useful for large motors to limit voltage drops on the grid and mechanical stresses at startup."
     },
     {
      "fr": "Pourquoi l'entretien préventif des moteurs électriques est-il important ?",
      "en": "Why is preventive maintenance of electric motors important?",
      "choices": [
       {
        "fr": "Parce qu'il permet de détecter et corriger de petits problèmes (lubrification, alignement, propreté, connexions) avant qu'ils ne causent une panne majeure ou coûteuse.",
        "en": "Because it allows small problems (lubrication, alignment, cleanliness, connections) to be detected and corrected before they cause a major or costly failure.",
        "correct": true
       },
       {
        "fr": "Un relais de commande est généralement conçu pour commuter de petits courants dans les circuits de contrôle, tandis qu'un contacteur est conçu pour commuter les courants plus élevés des circuits de puissance, comme l'alimentation d'un moteur. (distracteur à valider)",
        "en": "A control relay is generally designed to switch small currents in control circuits, while a contactor is designed to switch the higher currents of power circuits, such as a motor's power supply. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Le moteur monophasé fonctionne avec une seule phase de courant alternatif et nécessite souvent un dispositif de démarrage (condensateur), tandis que le moteur triphasé utilise trois phases déphasées qui créent naturellement un champ magnétique tournant. (distracteur à valider)",
        "en": "A single-phase motor runs on a single AC phase and often requires a starting device (capacitor), while a three-phase motor uses three out-of-phase currents that naturally create a rotating magnetic field. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "En inversant deux des trois conducteurs d'alimentation (sur les trois), ce qui inverse l'ordre de la séquence de phases et donc le sens du champ magnétique tournant. (distracteur à valider)",
        "en": "By swapping two of the three supply conductors, which reverses the phase sequence order and therefore the direction of the rotating magnetic field. (distractor to validate)",
        "correct": false
       }
      ],
      "explFr": "Un entretien typique inclut la vérification des roulements, le nettoyage des ouvertures de ventilation, l'inspection des connexions électriques pour des signes de surchauffe, et la mesure périodique de l'isolation des enroulements.",
      "explEn": "Typical maintenance includes checking bearings, cleaning ventilation openings, inspecting electrical connections for signs of overheating, and periodically measuring winding insulation."
     },
     {
      "fr": "Qu'est-ce qu'un relais de commande, par opposition à un contacteur ?",
      "en": "What is a control relay, as opposed to a contactor?",
      "choices": [
       {
        "fr": "Un relais de commande est généralement conçu pour commuter de petits courants dans les circuits de contrôle, tandis qu'un contacteur est conçu pour commuter les courants plus élevés des circuits de puissance, comme l'alimentation d'un moteur.",
        "en": "A control relay is generally designed to switch small currents in control circuits, while a contactor is designed to switch the higher currents of power circuits, such as a motor's power supply.",
        "correct": true
       },
       {
        "fr": "Le moteur monophasé fonctionne avec une seule phase de courant alternatif et nécessite souvent un dispositif de démarrage (condensateur), tandis que le moteur triphasé utilise trois phases déphasées qui créent naturellement un champ magnétique tournant. (distracteur à valider)",
        "en": "A single-phase motor runs on a single AC phase and often requires a starting device (capacitor), while a three-phase motor uses three out-of-phase currents that naturally create a rotating magnetic field. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "En inversant deux des trois conducteurs d'alimentation (sur les trois), ce qui inverse l'ordre de la séquence de phases et donc le sens du champ magnétique tournant. (distracteur à valider)",
        "en": "By swapping two of the three supply conductors, which reverses the phase sequence order and therefore the direction of the rotating magnetic field. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Une méthode de démarrage pour moteurs triphasés où le moteur démarre d'abord en configuration étoile (tension réduite sur chaque enroulement), puis bascule en configuration triangle (pleine tension) une fois lancé. (distracteur à valider)",
        "en": "A starting method for three-phase motors where the motor first starts in a star (reduced voltage on each winding) configuration, then switches to a delta (full voltage) configuration once it's running. (distractor to validate)",
        "correct": false
       }
      ],
      "explFr": "Les relais sont souvent utilisés pour la logique de commande (allumer une lampe témoin, activer une bobine de contacteur), alors que les contacteurs gèrent directement la puissance qui alimente la charge principale, comme le moteur lui-même.",
      "explEn": "Relays are often used for control logic (turning on an indicator lamp, energizing a contactor coil), while contactors directly handle the power supplied to the main load, such as the motor itself."
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Quel est le rôle principal d'un contacteur dans un circuit de commande de moteur ?",
      "en": "What is the main role of a contactor in a motor control circuit?",
      "choices": [
       {
        "fr": "Mesurer la température du moteur",
        "en": "Measure the motor's temperature",
        "correct": false
       },
       {
        "fr": "Établir ou interrompre l'alimentation électrique vers le moteur, généralement commandé par une bobine activée à distance",
        "en": "Make or break the electrical supply to the motor, usually controlled by a remotely activated coil",
        "correct": true
       },
       {
        "fr": "Convertir le courant alternatif en courant continu",
        "en": "Convert alternating current to direct current",
        "correct": false
       },
       {
        "fr": "Remplacer le disjoncteur de protection",
        "en": "Replace the protective breaker",
        "correct": false
       }
      ],
      "explFr": "Le contacteur est essentiellement un gros relais conçu pour commuter des courants élevés. Sa bobine, activée par un circuit de commande à basse puissance (boutons, capteurs), ferme ou ouvre les contacts principaux qui alimentent le moteur.",
      "explEn": "A contactor is essentially a large relay designed to switch high currents. Its coil, activated by a low-power control circuit (buttons, sensors), opens or closes the main contacts that power the motor."
     },
     {
      "type": "tf",
      "fr": "La protection thermique d'un moteur a pour but de couper l'alimentation si le moteur surchauffe, par exemple en raison d'une surcharge mécanique.",
      "en": "Motor thermal protection is designed to cut power if the motor overheats, for example due to a mechanical overload.",
      "isTrue": true,
      "explFr": "Vrai. Un moteur qui travaille au-delà de sa capacité (charge mécanique trop élevée, blocage, etc.) consomme plus de courant et chauffe excessivement. Le relais de surcharge thermique détecte cette condition et coupe le circuit avant que les enroulements ne soient endommagés.",
      "explEn": "True. A motor working beyond its capacity (excessive mechanical load, jam, etc.) draws more current and overheats. The thermal overload relay detects this condition and cuts the circuit before the windings are damaged."
     },
     {
      "fr": "Quel est l'avantage principal d'un variateur de vitesse (VFD) pour un moteur ?",
      "en": "What is the main advantage of a variable frequency drive (VFD) for a motor?",
      "choices": [
       {
        "fr": "Il élimine complètement le besoin de protection thermique",
        "en": "It completely eliminates the need for thermal protection",
        "correct": false
       },
       {
        "fr": "Il permet de faire varier la vitesse et le couple du moteur en ajustant la fréquence et la tension qui lui sont fournies",
        "en": "It allows the motor's speed and torque to vary by adjusting the frequency and voltage supplied to it",
        "correct": true
       },
       {
        "fr": "Il augmente toujours la puissance maximale du moteur au-delà de sa plaque signalétique",
        "en": "It always increases the motor's maximum power beyond its nameplate rating",
        "correct": false
       },
       {
        "fr": "Il rend le moteur monophasé en triphasé",
        "en": "It turns a single-phase motor into a three-phase motor",
        "correct": false
       }
      ],
      "explFr": "Le variateur de vitesse (VFD) convertit l'alimentation en une fréquence et une tension variables, ce qui permet de contrôler précisément la vitesse de rotation du moteur. Cela offre des économies d'énergie importantes pour des applications comme les pompes et ventilateurs, où la demande varie.",
      "explEn": "A VFD converts the supply into a variable frequency and voltage, allowing precise control of the motor's rotational speed. This provides significant energy savings for applications like pumps and fans, where demand varies."
     },
     {
      "type": "tf",
      "fr": "Un démarrage direct (full voltage starting) applique immédiatement la pleine tension au moteur, ce qui peut provoquer un courant d'appel plusieurs fois plus élevé que le courant nominal de fonctionnement.",
      "en": "A direct-on-line (full voltage) start immediately applies full voltage to the motor, which can cause an inrush current several times higher than the rated operating current.",
      "isTrue": true,
      "explFr": "Vrai. Au démarrage direct, le courant d'appel peut être de 5 à 8 fois (voire plus) le courant nominal, pendant une courte période. Pour les petits moteurs, c'est généralement acceptable, mais pour les gros moteurs, cela peut causer des perturbations sur le réseau électrique et des contraintes mécaniques importantes.",
      "explEn": "True. With a direct-on-line start, the inrush current can be 5 to 8 times (or more) the rated current, for a short period. For small motors this is generally acceptable, but for large motors it can cause disturbances on the power grid and significant mechanical stresses."
     },
     {
      "fr": "Dans un circuit de commande avant/arrière pour inverser un moteur triphasé, pourquoi est-il essentiel d'avoir un verrouillage (interlock) entre les deux contacteurs ?",
      "en": "In a forward/reverse control circuit for a three-phase motor, why is an interlock between the two contactors essential?",
      "choices": [
       {
        "fr": "Pour économiser de l'espace dans le panneau de commande",
        "en": "To save space in the control panel",
        "correct": false
       },
       {
        "fr": "Pour empêcher les deux contacteurs d'être activés simultanément, ce qui causerait un court-circuit entre les phases inversées",
        "en": "To prevent both contactors from being activated at the same time, which would cause a short circuit between the reversed phases",
        "correct": true
       },
       {
        "fr": "Pour réduire le bruit du moteur",
        "en": "To reduce motor noise",
        "correct": false
       },
       {
        "fr": "Le verrouillage n'a aucune utilité réelle",
        "en": "The interlock serves no real purpose",
        "correct": false
       }
      ],
      "explFr": "Si les contacteurs avant et arrière étaient activés en même temps, deux phases seraient inversées simultanément par rapport à l'autre, créant un court-circuit direct entre phases via les contacts. Le verrouillage électrique (et souvent mécanique) garantit qu'un seul contacteur peut être actif à la fois.",
      "explEn": "If the forward and reverse contactors were activated at the same time, two phases would be reversed relative to each other simultaneously, creating a direct short circuit between phases through the contacts. The electrical (and often mechanical) interlock ensures only one contactor can be active at a time."
     },
     {
      "fr": "Avant de régler un relais de surcharge ou de remplacer un moteur, quelle source d'information est essentielle à consulter ?",
      "en": "Before setting an overload relay or replacing a motor, what information source is essential to check?",
      "choices": [
       {
        "fr": "La couleur du boîtier du moteur",
        "en": "The color of the motor housing",
        "correct": false
       },
       {
        "fr": "La plaque signalétique du moteur, qui indique la tension, le courant nominal, la puissance et la vitesse",
        "en": "The motor's nameplate, which shows voltage, rated current, power, and speed",
        "correct": true
       },
       {
        "fr": "Le nombre d'heures de fonctionnement affiché sur le mur",
        "en": "The number of operating hours displayed on the wall",
        "correct": false
       },
       {
        "fr": "Aucune information n'est nécessaire, tous les moteurs sont identiques",
        "en": "No information is needed, all motors are identical",
        "correct": false
       }
      ],
      "explFr": "La plaque signalétique est la référence principale pour s'assurer que les réglages de protection (comme le relais de surcharge), l'alimentation et les pièces de remplacement correspondent exactement aux spécifications du moteur installé.",
      "explEn": "The nameplate is the primary reference to ensure protection settings (such as the overload relay), power supply, and replacement parts exactly match the specifications of the installed motor."
     },
     {
      "fr": "Quel est l'avantage principal d'un démarreur progressif (soft starter) par rapport à un démarrage direct pour un gros moteur ?",
      "en": "What is the main advantage of a soft starter compared to a direct-on-line start for a large motor?",
      "choices": [
       {
        "fr": "Il élimine complètement le besoin d'un relais de surcharge",
        "en": "It completely eliminates the need for an overload relay",
        "correct": false
       },
       {
        "fr": "Il réduit progressivement la tension appliquée au démarrage, limitant le courant d'appel et les contraintes mécaniques soudaines sur le moteur et la charge entraînée",
        "en": "It gradually ramps up the voltage applied at startup, limiting inrush current and sudden mechanical stresses on the motor and driven load",
        "correct": true
       },
       {
        "fr": "Il permet de faire fonctionner le moteur à l'envers automatiquement",
        "en": "It allows the motor to run in reverse automatically",
        "correct": false
       },
       {
        "fr": "Il augmente la vitesse nominale du moteur au-delà de sa plaque signalétique",
        "en": "It increases the motor's rated speed beyond its nameplate rating",
        "correct": false
       }
      ],
      "explFr": "Contrairement au variateur de vitesse qui contrôle la vitesse en continu, le démarreur progressif sert principalement à adoucir le démarrage (et parfois l'arrêt), réduisant le courant d'appel et prolongeant la durée de vie des composants mécaniques comme les courroies et accouplements.",
      "explEn": "Unlike a VFD, which continuously controls speed, a soft starter mainly serves to smooth the start (and sometimes the stop), reducing inrush current and extending the life of mechanical components like belts and couplings."
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "type": "scenario",
      "fr": "Un moteur triphasé d'un convoyeur industriel se met en marche, mais le relais de surcharge thermique déclenche après environ 30 secondes, chaque fois.\n\nQuelle est la première chose à vérifier ?",
      "en": "A three-phase motor on an industrial conveyor starts up, but the thermal overload relay trips after about 30 seconds, every time.\n\nWhat is the first thing to check?",
      "choices": [
       {
        "fr": "Remplacer immédiatement le moteur sans investigation",
        "en": "Immediately replace the motor without investigation",
        "correct": false
       },
       {
        "fr": "Vérifier si le convoyeur est mécaniquement bloqué ou surchargé, et si le réglage du relais de surcharge correspond au courant nominal de la plaque signalétique du moteur",
        "en": "Check whether the conveyor is mechanically jammed or overloaded, and whether the overload relay setting matches the motor's nameplate current rating",
        "correct": true
       },
       {
        "fr": "Augmenter le réglage du relais de surcharge jusqu'à ce qu'il ne déclenche plus",
        "en": "Increase the overload relay setting until it stops tripping",
        "correct": false
       },
       {
        "fr": "Changer la couleur des fils de commande",
        "en": "Change the color of the control wires",
        "correct": false
       }
      ],
      "explFr": "Un déclenchement répété de la surcharge thermique indique souvent un problème réel (blocage mécanique, frottement excessif, mauvais alignement) ou un mauvais réglage du relais. Augmenter aveuglément le réglage sans comprendre la cause peut masquer un problème et endommager le moteur de façon permanente.",
      "explEn": "A repeated thermal overload trip often indicates a real problem (mechanical jam, excessive friction, misalignment) or an incorrect relay setting. Blindly increasing the setting without understanding the cause can mask a problem and permanently damage the motor."
     },
     {
      "type": "scenario",
      "fr": "Tu es appelé pour un moteur monophasé de pompe à eau résidentielle qui 'bourdonne' sans démarrer lorsqu'on l'alimente, puis se met à chauffer si on laisse l'alimentation trop longtemps.\n\nQuelle cause est la plus probable ?",
      "en": "You're called out for a residential single-phase water pump motor that 'hums' without starting when powered, then begins to overheat if left energized too long.\n\nWhat is the most likely cause?",
      "choices": [
       {
        "fr": "Un condensateur de démarrage défectueux qui empêche le moteur de créer le couple nécessaire pour démarrer",
        "en": "A faulty starting capacitor that prevents the motor from generating the torque needed to start",
        "correct": true
       },
       {
        "fr": "Le moteur est trop puissant pour la pompe",
        "en": "The motor is too powerful for the pump",
        "correct": false
       },
       {
        "fr": "La couleur du boîtier du moteur est incorrecte",
        "en": "The motor housing is the wrong color",
        "correct": false
       },
       {
        "fr": "Le moteur fonctionne parfaitement et c'est normal",
        "en": "The motor is working perfectly and this is normal",
        "correct": false
       }
      ],
      "explFr": "Sur un moteur monophasé, le condensateur de démarrage crée le déphasage nécessaire pour générer un couple de démarrage suffisant. S'il est défectueux, le moteur reste alimenté (d'où le bourdonnement et la consommation de courant) mais ne peut pas démarrer la rotation, ce qui cause une surchauffe rapide des enroulements.",
      "explEn": "In a single-phase motor, the starting capacitor creates the phase shift needed to generate sufficient starting torque. If it's faulty, the motor remains energized (hence the humming and current draw) but can't start rotating, causing rapid overheating of the windings."
     },
     {
      "type": "scenario",
      "fr": "Lors de l'installation d'un nouveau moteur triphasé sur une machine-outil, tu remarques que le sens de rotation indiqué par une flèche sur le moteur ne correspond pas au sens observé une fois le moteur démarré pour un bref test.\n\nQue dois-tu faire ?",
      "en": "While installing a new three-phase motor on a machine tool, you notice that the rotation direction indicated by an arrow on the motor doesn't match the direction observed during a brief test run.\n\nWhat should you do?",
      "choices": [
       {
        "fr": "Laisser fonctionner ainsi, le sens de rotation n'a généralement pas d'importance",
        "en": "Leave it as is, rotation direction generally doesn't matter",
        "correct": false
       },
       {
        "fr": "Couper l'alimentation, cadenasser, puis inverser deux des trois conducteurs d'alimentation pour corriger le sens de rotation avant de remettre en service",
        "en": "Cut the power, lock it out, then swap two of the three supply conductors to correct the rotation direction before putting it back into service",
        "correct": true
       },
       {
        "fr": "Faire fonctionner la machine à l'envers en permanence",
        "en": "Run the machine in reverse permanently",
        "correct": false
       },
       {
        "fr": "Démonter complètement le moteur pour inverser ses enroulements internes",
        "en": "Completely disassemble the motor to reverse its internal windings",
        "correct": false
       }
      ],
      "explFr": "Le sens de rotation est souvent critique pour le bon fonctionnement et la sécurité d'une machine (pompes, convoyeurs, ventilateurs). La correction se fait simplement en inversant deux conducteurs de phase, mais cela doit être fait hors tension, avec cadenassage, avant un nouveau test.",
      "explEn": "Rotation direction is often critical to the proper operation and safety of a machine (pumps, conveyors, fans). The fix is simply to swap two phase conductors, but this must be done with power off and the equipment locked out, before a new test."
     }
    ]
   }
  ]
 },
 {
  "id": "elec08",
  "order": 8,
  "code": "5295-08",
  "hours": 60,
  "title_fr": "Dépannage et entretien",
  "title_en": "Troubleshooting & Maintenance",
  "icon": "🔍",
  "tiers": [
   {
    "level": 1,
    "questions": [
     {
      "fr": "Quelle est la première étape de toute méthode de dépannage électrique systématique ?",
      "en": "What is the first step in any systematic electrical troubleshooting method?",
      "choices": [
       {
        "fr": "Recueillir l'information sur le problème : ce qui ne fonctionne pas, depuis quand, et dans quelles circonstances (interrogation de l'utilisateur, observation des symptômes).",
        "en": "Gather information about the problem: what's not working, since when, and under what circumstances (questioning the user, observing symptoms).",
        "correct": true
       },
       {
        "fr": "Un circuit ouvert signifie qu'il y a une coupure dans le chemin du courant (le courant ne circule pas du tout), tandis qu'une surcharge signifie que le courant circule, mais en quantité supérieure à ce que le circuit est conçu pour supporter de façon continue. (distracteur à valider)",
        "en": "An open circuit means there's a break in the current path (no current flows at all), while an overload means current is flowing, but in an amount greater than what the circuit is designed to handle continuously. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Parce qu'il confirme rapidement si un chemin électrique complet existe entre deux points, sans devoir suivre visuellement tout le trajet du conducteur. (distracteur à valider)",
        "en": "Because it quickly confirms whether a complete electrical path exists between two points, without having to visually trace the entire run of the conductor. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "L'entretien préventif consiste à effectuer des vérifications et des interventions planifiées avant qu'une panne ne survienne, tandis que l'entretien correctif consiste à réparer un équipement après qu'une panne s'est produite. (distracteur à valider)",
        "en": "Preventive maintenance consists of performing planned checks and interventions before a failure occurs, while corrective maintenance consists of repairing equipment after a failure has occurred. (distractor to validate)",
        "correct": false
       }
      ],
      "explFr": "Sauter directement aux tests ou au remplacement de pièces sans comprendre le contexte du problème peut mener à des diagnostics erronés et à perdre beaucoup de temps. Une bonne collecte d'information oriente efficacement les vérifications suivantes.",
      "explEn": "Jumping straight to testing or replacing parts without understanding the context of the problem can lead to incorrect diagnoses and wasted time. Good information gathering effectively guides the checks that follow."
     },
     {
      "fr": "Quelle est la différence entre un circuit ouvert et une surcharge ?",
      "en": "What is the difference between an open circuit and an overload?",
      "choices": [
       {
        "fr": "Un circuit ouvert signifie qu'il y a une coupure dans le chemin du courant (le courant ne circule pas du tout), tandis qu'une surcharge signifie que le courant circule, mais en quantité supérieure à ce que le circuit est conçu pour supporter de façon continue.",
        "en": "An open circuit means there's a break in the current path (no current flows at all), while an overload means current is flowing, but in an amount greater than what the circuit is designed to handle continuously.",
        "correct": true
       },
       {
        "fr": "Parce qu'il confirme rapidement si un chemin électrique complet existe entre deux points, sans devoir suivre visuellement tout le trajet du conducteur. (distracteur à valider)",
        "en": "Because it quickly confirms whether a complete electrical path exists between two points, without having to visually trace the entire run of the conductor. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "L'entretien préventif consiste à effectuer des vérifications et des interventions planifiées avant qu'une panne ne survienne, tandis que l'entretien correctif consiste à réparer un équipement après qu'une panne s'est produite. (distracteur à valider)",
        "en": "Preventive maintenance consists of performing planned checks and interventions before a failure occurs, while corrective maintenance consists of repairing equipment after a failure has occurred. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Parce qu'un déséquilibre important entre les phases peut indiquer un problème d'enroulement, une connexion défectueuse ou un déséquilibre de tension d'alimentation. (distracteur à valider)",
        "en": "Because a significant imbalance between phases can indicate a winding problem, a faulty connection, or a supply voltage imbalance. (distractor to validate)",
        "correct": false
       }
      ],
      "explFr": "Un circuit ouvert peut être causé par un fil cassé, une connexion desserrée ou un interrupteur défectueux. Une surcharge survient typiquement quand trop d'appareils sont branchés sur un même circuit, demandant plus de courant que sa capacité nominale.",
      "explEn": "An open circuit can be caused by a broken wire, a loose connection, or a faulty switch. An overload typically occurs when too many devices are plugged into the same circuit, drawing more current than its rated capacity."
     },
     {
      "fr": "Pourquoi le test de continuité est-il utile pour diagnostiquer un fil suspecté d'être rompu ?",
      "en": "Why is a continuity test useful for diagnosing a wire suspected of being broken?",
      "choices": [
       {
        "fr": "Parce qu'il confirme rapidement si un chemin électrique complet existe entre deux points, sans devoir suivre visuellement tout le trajet du conducteur.",
        "en": "Because it quickly confirms whether a complete electrical path exists between two points, without having to visually trace the entire run of the conductor.",
        "correct": true
       },
       {
        "fr": "L'entretien préventif consiste à effectuer des vérifications et des interventions planifiées avant qu'une panne ne survienne, tandis que l'entretien correctif consiste à réparer un équipement après qu'une panne s'est produite. (distracteur à valider)",
        "en": "Preventive maintenance consists of performing planned checks and interventions before a failure occurs, while corrective maintenance consists of repairing equipment after a failure has occurred. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Parce qu'un déséquilibre important entre les phases peut indiquer un problème d'enroulement, une connexion défectueuse ou un déséquilibre de tension d'alimentation. (distracteur à valider)",
        "en": "Because a significant imbalance between phases can indicate a winding problem, a faulty connection, or a supply voltage imbalance. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Recueillir l'information sur le problème : ce qui ne fonctionne pas, depuis quand, et dans quelles circonstances (interrogation de l'utilisateur, observation des symptômes). (distracteur à valider)",
        "en": "Gather information about the problem: what's not working, since when, and under what circumstances (questioning the user, observing symptoms). (distractor to validate)",
        "correct": false
       }
      ],
      "explFr": "Un résultat 'pas de continuité' sur un conducteur qui devrait normalement être continu indique une rupture interne, souvent invisible de l'extérieur, comme un bris causé par une flexion répétée ou une connexion corrodée.",
      "explEn": "A 'no continuity' result on a conductor that should normally be continuous indicates an internal break, often invisible from the outside, such as damage caused by repeated flexing or a corroded connection."
     },
     {
      "fr": "Quelle est la différence entre l'entretien préventif et l'entretien correctif ?",
      "en": "What is the difference between preventive maintenance and corrective maintenance?",
      "choices": [
       {
        "fr": "L'entretien préventif consiste à effectuer des vérifications et des interventions planifiées avant qu'une panne ne survienne, tandis que l'entretien correctif consiste à réparer un équipement après qu'une panne s'est produite.",
        "en": "Preventive maintenance consists of performing planned checks and interventions before a failure occurs, while corrective maintenance consists of repairing equipment after a failure has occurred.",
        "correct": true
       },
       {
        "fr": "Parce qu'un déséquilibre important entre les phases peut indiquer un problème d'enroulement, une connexion défectueuse ou un déséquilibre de tension d'alimentation. (distracteur à valider)",
        "en": "Because a significant imbalance between phases can indicate a winding problem, a faulty connection, or a supply voltage imbalance. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Recueillir l'information sur le problème : ce qui ne fonctionne pas, depuis quand, et dans quelles circonstances (interrogation de l'utilisateur, observation des symptômes). (distracteur à valider)",
        "en": "Gather information about the problem: what's not working, since when, and under what circumstances (questioning the user, observing symptoms). (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Un circuit ouvert signifie qu'il y a une coupure dans le chemin du courant (le courant ne circule pas du tout), tandis qu'une surcharge signifie que le courant circule, mais en quantité supérieure à ce que le circuit est conçu pour supporter de façon continue. (distracteur à valider)",
        "en": "An open circuit means there's a break in the current path (no current flows at all), while an overload means current is flowing, but in an amount greater than what the circuit is designed to handle continuously. (distractor to validate)",
        "correct": false
       }
      ],
      "explFr": "L'entretien préventif (nettoyage, resserrage des connexions, mesures de routine) vise à réduire la fréquence et la gravité des pannes, généralement à moindre coût qu'une réparation d'urgence imprévue, qui peut aussi causer des arrêts de production coûteux.",
      "explEn": "Preventive maintenance (cleaning, tightening connections, routine measurements) aims to reduce the frequency and severity of failures, generally at a lower cost than an unplanned emergency repair, which can also cause costly production downtime."
     },
     {
      "fr": "Pourquoi est-il utile de comparer les lectures de courant entre les trois phases d'un moteur triphasé lors d'un dépannage ?",
      "en": "Why is it useful to compare current readings across the three phases of a three-phase motor during troubleshooting?",
      "choices": [
       {
        "fr": "Parce qu'un déséquilibre important entre les phases peut indiquer un problème d'enroulement, une connexion défectueuse ou un déséquilibre de tension d'alimentation.",
        "en": "Because a significant imbalance between phases can indicate a winding problem, a faulty connection, or a supply voltage imbalance.",
        "correct": true
       },
       {
        "fr": "Recueillir l'information sur le problème : ce qui ne fonctionne pas, depuis quand, et dans quelles circonstances (interrogation de l'utilisateur, observation des symptômes). (distracteur à valider)",
        "en": "Gather information about the problem: what's not working, since when, and under what circumstances (questioning the user, observing symptoms). (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Un circuit ouvert signifie qu'il y a une coupure dans le chemin du courant (le courant ne circule pas du tout), tandis qu'une surcharge signifie que le courant circule, mais en quantité supérieure à ce que le circuit est conçu pour supporter de façon continue. (distracteur à valider)",
        "en": "An open circuit means there's a break in the current path (no current flows at all), while an overload means current is flowing, but in an amount greater than what the circuit is designed to handle continuously. (distractor to validate)",
        "correct": false
       },
       {
        "fr": "Parce qu'il confirme rapidement si un chemin électrique complet existe entre deux points, sans devoir suivre visuellement tout le trajet du conducteur. (distracteur à valider)",
        "en": "Because it quickly confirms whether a complete electrical path exists between two points, without having to visually trace the entire run of the conductor. (distractor to validate)",
        "correct": false
       }
      ],
      "explFr": "Dans un moteur triphasé sain alimenté par une tension équilibrée, les courants des trois phases devraient être relativement proches les uns des autres. Un écart important sur une phase oriente souvent le diagnostic vers cette phase en particulier.",
      "explEn": "In a healthy three-phase motor supplied with balanced voltage, the currents in the three phases should be relatively close to each other. A large discrepancy on one phase often directs the diagnosis toward that specific phase."
     }
    ]
   },
   {
    "level": 2,
    "questions": [
     {
      "fr": "Avant toute intervention de dépannage sur un circuit, quelle est l'étape de sécurité incontournable ?",
      "en": "Before any troubleshooting work on a circuit, what is the essential safety step?",
      "choices": [
       {
        "fr": "Vérifier l'absence de tension (VAT) avec un appareil de mesure approprié, après avoir coupé l'alimentation",
        "en": "Verify the absence of voltage with an appropriate test instrument, after shutting off the power",
        "correct": true
       },
       {
        "fr": "Démonter immédiatement tous les composants pour les inspecter",
        "en": "Immediately disassemble all components for inspection",
        "correct": false
       },
       {
        "fr": "Augmenter la tension pour voir ce qui se passe",
        "en": "Increase the voltage to see what happens",
        "correct": false
       },
       {
        "fr": "Demander à un collègue de tenir les fils",
        "en": "Ask a coworker to hold the wires",
        "correct": false
       }
      ],
      "explFr": "La vérification de l'absence de tension (VAT) après avoir coupé l'alimentation et cadenassé, si applicable, est essentielle avant toute manipulation de conducteurs ou de composants, afin d'éviter un choc électrique pendant le dépannage.",
      "explEn": "Verifying the absence of voltage after shutting off the power and locking out, if applicable, is essential before handling any conductors or components, in order to avoid electrical shock during troubleshooting."
     },
     {
      "type": "tf",
      "fr": "Un court-circuit se produit lorsque le courant trouve un chemin de résistance très faible entre deux points qui ne devraient normalement pas être directement connectés, causant un pic de courant important.",
      "en": "A short circuit occurs when current finds a very low-resistance path between two points that should not normally be directly connected, causing a major current spike.",
      "isTrue": true,
      "explFr": "Vrai. Un court-circuit crée un chemin à très basse résistance (par exemple, un conducteur sous tension touchant directement le neutre ou la terre), ce qui provoque un courant très élevé, généralement suivi du déclenchement immédiat du disjoncteur de protection.",
      "explEn": "True. A short circuit creates a very low-resistance path (for example, a live conductor touching the neutral or ground directly), causing a very high current, usually followed by the immediate tripping of the protective breaker."
     },
     {
      "fr": "Lors du dépannage d'un appareil électroménager affichant un code d'erreur sur son afficheur numérique, quelle est la meilleure première action ?",
      "en": "When troubleshooting a household appliance that displays an error code on its digital screen, what is the best first action?",
      "choices": [
       {
        "fr": "Ignorer le code et démonter directement le moteur",
        "en": "Ignore the code and disassemble the motor directly",
        "correct": false
       },
       {
        "fr": "Consulter le manuel technique ou la documentation du fabricant pour comprendre la signification précise de ce code d'erreur",
        "en": "Consult the manufacturer's technical manual or documentation to understand the precise meaning of this error code",
        "correct": true
       },
       {
        "fr": "Réinitialiser l'appareil en le frappant légèrement",
        "en": "Reset the appliance by tapping it lightly",
        "correct": false
       },
       {
        "fr": "Remplacer toutes les pièces électroniques par précaution",
        "en": "Replace all the electronic parts as a precaution",
        "correct": false
       }
      ],
      "explFr": "Les codes d'erreur sont conçus pour orienter rapidement le diagnostic vers un sous-système précis (capteur, moteur, carte de contrôle). Consulter la documentation du fabricant permet d'éviter de perdre du temps sur des hypothèses non pertinentes.",
      "explEn": "Error codes are designed to quickly point the diagnosis toward a specific subsystem (sensor, motor, control board). Consulting the manufacturer's documentation avoids wasting time on irrelevant guesses."
     },
     {
      "type": "tf",
      "fr": "Vérifier la mise à la terre d'un appareil ou d'une installation fait partie des étapes normales de dépannage lorsqu'on suspecte un problème de choc électrique ressenti par l'utilisateur.",
      "en": "Checking the grounding of an appliance or installation is a normal troubleshooting step when an electrical shock complaint is reported by a user.",
      "isTrue": true,
      "explFr": "Vrai. Une mise à la terre manquante, mal connectée ou détériorée peut faire en sorte que le boîtier métallique d'un appareil devienne sous tension en cas de défaut interne, provoquant des chocs ressentis par l'utilisateur. Vérifier la continuité et la connexion de la mise à la terre est une étape clé.",
      "explEn": "True. A missing, poorly connected, or deteriorated ground can cause the metal housing of an appliance to become energized in the event of an internal fault, resulting in shocks felt by the user. Checking the continuity and connection of the ground is a key step."
     },
     {
      "fr": "Un disjoncteur déclenche immédiatement chaque fois qu'on tente de le réenclencher, sans qu'aucune charge ne soit branchée sur le circuit. Quelle est l'interprétation la plus probable ?",
      "en": "A breaker trips immediately every time you try to reset it, with no load connected to the circuit. What is the most likely interpretation?",
      "choices": [
       {
        "fr": "Le disjoncteur est trop sensible et devrait être remplacé par un calibre plus élevé sans autre vérification",
        "en": "The breaker is too sensitive and should be replaced with a higher-rated one without any further checks",
        "correct": false
       },
       {
        "fr": "Il y a probablement un court-circuit dans le câblage fixe du circuit lui-même (avant même les charges), qu'il faut localiser et corriger",
        "en": "There is likely a short circuit in the fixed wiring of the circuit itself (even before any loads), which must be located and corrected",
        "correct": true
       },
       {
        "fr": "C'est tout à fait normal et ne nécessite aucune action",
        "en": "This is completely normal and requires no action",
        "correct": false
       },
       {
        "fr": "Le problème vient nécessairement du panneau principal en entier",
        "en": "The problem must necessarily be in the entire main panel",
        "correct": false
       }
      ],
      "explFr": "Si le disjoncteur déclenche même sans charge branchée, le défaut se situe probablement dans le câblage fixe (un conducteur endommagé qui touche un autre conducteur ou la terre). Augmenter le calibre du disjoncteur sans corriger la cause serait dangereux, car cela permettrait au défaut de persister avec un courant plus élevé avant la coupure.",
      "explEn": "If the breaker trips even with no load connected, the fault is likely in the fixed wiring (a damaged conductor touching another conductor or ground). Increasing the breaker's rating without fixing the cause would be dangerous, since it would allow the fault to persist with a higher current before tripping."
     },
     {
      "fr": "Quelle est l'utilité de documenter les interventions de dépannage (cause trouvée, solution appliquée) ?",
      "en": "What is the value of documenting troubleshooting work (cause found, solution applied)?",
      "choices": [
       {
        "fr": "Aucune utilité, c'est une perte de temps administrative",
        "en": "No value, it's a waste of administrative time",
        "correct": false
       },
       {
        "fr": "Cela aide à identifier des tendances, comme un équipement qui tombe en panne fréquemment pour la même raison, et oriente les décisions d'entretien préventif ou de remplacement",
        "en": "It helps identify trends, such as equipment that fails frequently for the same reason, and guides decisions about preventive maintenance or replacement",
        "correct": true
       },
       {
        "fr": "Cela sert uniquement à remplir des quotas de paperasse",
        "en": "It's only used to fill paperwork quotas",
        "correct": false
       },
       {
        "fr": "Cela remplace la nécessité de tester l'équipement après réparation",
        "en": "It eliminates the need to test the equipment after repair",
        "correct": false
       }
      ],
      "explFr": "Une bonne documentation des pannes et de leurs solutions aide à identifier des tendances récurrentes, ce qui peut orienter des décisions d'entretien préventif ou de remplacement plus stratégiques, et accélère le diagnostic lors d'une panne future similaire.",
      "explEn": "Good documentation of failures and their solutions helps identify recurring trends, which can guide more strategic preventive maintenance or replacement decisions, and speeds up diagnosis for a future similar failure."
     },
     {
      "fr": "Pourquoi est-il préférable de remettre un équipement en service progressivement après une réparation, plutôt que de tout redémarrer en même temps ?",
      "en": "Why is it preferable to bring equipment back into service gradually after a repair, rather than restarting everything at once?",
      "choices": [
       {
        "fr": "Cela permet de confirmer que la réparation a corrigé le problème et qu'aucun nouveau problème n'apparaît, avant de remettre toute la charge en fonctionnement normal",
        "en": "It allows you to confirm that the repair fixed the problem and that no new problem appears, before bringing the full load back to normal operation",
        "correct": true
       },
       {
        "fr": "Cela n'a aucune importance, un redémarrage complet est toujours plus rapide et plus sûr",
        "en": "It doesn't matter, a full restart is always faster and safer",
        "correct": false
       },
       {
        "fr": "Pour économiser de l'électricité pendant le redémarrage",
        "en": "To save electricity during the restart",
        "correct": false
       },
       {
        "fr": "Parce que les disjoncteurs ne peuvent jamais être réenclenchés rapidement",
        "en": "Because breakers can never be reset quickly",
        "correct": false
       }
      ],
      "explFr": "Un redémarrage progressif, avec surveillance des paramètres clés (courant, température, bruit), permet de détecter rapidement un problème persistant ou nouveau dans un environnement plus contrôlé, plutôt que de découvrir un problème majeur une fois tout le système relancé à pleine charge.",
      "explEn": "A gradual restart, with monitoring of key parameters (current, temperature, noise), allows you to quickly detect a persistent or new problem in a more controlled environment, rather than discovering a major issue once the entire system is back at full load."
     }
    ]
   },
   {
    "level": 3,
    "questions": [
     {
      "type": "scenario",
      "fr": "Un client signale qu'une prise dans son salon ne fonctionne plus, alors que d'autres prises sur le même mur fonctionnent normalement. Le disjoncteur n'a pas déclenché.\n\nQuelle est ta démarche de dépannage la plus logique ?",
      "en": "A homeowner reports that an outlet in their living room no longer works, while other outlets on the same wall work normally. The breaker hasn't tripped.\n\nWhat is the most logical troubleshooting approach?",
      "choices": [
       {
        "fr": "Remplacer immédiatement le disjoncteur du panneau",
        "en": "Immediately replace the panel breaker",
        "correct": false
       },
       {
        "fr": "Couper l'alimentation du circuit, puis vérifier la prise elle-même et les connexions en amont (boîtes de jonction, prises intermédiaires sur le même circuit) pour trouver une connexion desserrée ou défectueuse",
        "en": "Shut off power to the circuit, then check the outlet itself and the upstream connections (junction boxes, intermediate outlets on the same circuit) to find a loose or faulty connection",
        "correct": true
       },
       {
        "fr": "Dire au client d'acheter de nouveaux appareils",
        "en": "Tell the homeowner to buy new appliances",
        "correct": false
       },
       {
        "fr": "Augmenter le calibre du disjoncteur pour résoudre le problème",
        "en": "Increase the breaker's amperage rating to solve the problem",
        "correct": false
       }
      ],
      "explFr": "Puisque le disjoncteur n'a pas déclenché et que d'autres prises fonctionnent, le problème est probablement localisé à cette prise précise ou à une connexion en amont sur le même circuit (souvent une connexion desserrée dans une boîte). Une vérification méthodique, prise par prise, permet de localiser la défaillance.",
      "explEn": "Since the breaker hasn't tripped and other outlets work, the problem is likely localized to this specific outlet or an upstream connection on the same circuit (often a loose connection in a box). A methodical, outlet-by-outlet check helps locate the fault."
     },
     {
      "type": "scenario",
      "fr": "Pendant une tournée d'entretien préventif dans un atelier, tu remarques qu'un boîtier de jonction est légèrement décoloré (brunâtre) près d'une connexion, sans odeur ni fumée visible.\n\nQuelle est l'interprétation et l'action appropriées ?",
      "en": "During a preventive maintenance round in a workshop, you notice that a junction box is slightly discolored (brownish) near a connection, with no smell or visible smoke.\n\nWhat is the appropriate interpretation and action?",
      "choices": [
       {
        "fr": "Ignorer, car il n'y a pas de fumée donc aucun danger",
        "en": "Ignore it, since there's no smoke there's no danger",
        "correct": false
       },
       {
        "fr": "Reconnaître ce signe comme un indicateur possible de surchauffe passée ou en cours due à une connexion desserrée, couper l'alimentation, inspecter et resserrer ou remplacer la connexion selon le cas",
        "en": "Recognize this sign as a possible indicator of past or ongoing overheating due to a loose connection, shut off power, inspect, and tighten or replace the connection as needed",
        "correct": true
       },
       {
        "fr": "Peindre par-dessus la décoloration pour cacher le problème",
        "en": "Paint over the discoloration to hide the problem",
        "correct": false
       },
       {
        "fr": "Augmenter la charge du circuit pour voir si le problème s'aggrave",
        "en": "Increase the circuit's load to see if the problem gets worse",
        "correct": false
       }
      ],
      "explFr": "La décoloration ou le noircissement autour d'une connexion est souvent un signe précoce de surchauffe causée par une résistance de contact excessive (connexion desserrée ou corrodée). Intervenir tôt, lors de l'entretien préventif, permet d'éviter une défaillance majeure ou un incendie plus tard.",
      "explEn": "Discoloration or blackening around a connection is often an early sign of overheating caused by excessive contact resistance (a loose or corroded connection). Addressing it early, during preventive maintenance, can prevent a major failure or fire later on."
     },
     {
      "type": "scenario",
      "fr": "Tu interviens sur un système de chauffage électrique résidentiel qui ne produit plus de chaleur, mais le ventilateur fonctionne normalement. Le client mentionne qu'un bruit de claquement s'est produit juste avant l'arrêt du chauffage.\n\nQuelle hypothèse de dépannage est la plus pertinente à vérifier en premier, après avoir coupé l'alimentation et confirmé l'absence de tension ?",
      "en": "You're working on a residential electric heating system that no longer produces heat, but the fan runs normally. The homeowner mentions that a clicking sound occurred just before the heat stopped.\n\nWhich troubleshooting hypothesis is most relevant to check first, after shutting off power and confirming the absence of voltage?",
      "choices": [
       {
        "fr": "Vérifier la continuité des éléments chauffants et de leurs connexions, car le bruit de claquement et la perte de chaleur (sans perte de ventilation) suggèrent un problème localisé à cette section",
        "en": "Check the continuity of the heating elements and their connections, since the clicking sound and loss of heat (without loss of fan operation) suggest a problem localized to that section",
        "correct": true
       },
       {
        "fr": "Remplacer immédiatement tout le système de chauffage sans diagnostic",
        "en": "Immediately replace the entire heating system without diagnosis",
        "correct": false
       },
       {
        "fr": "Vérifier uniquement la couleur du boîtier extérieur",
        "en": "Check only the color of the outer housing",
        "correct": false
       },
       {
        "fr": "Augmenter la température de la thermostat pour forcer le redémarrage",
        "en": "Increase the thermostat temperature to force a restart",
        "correct": false
       }
      ],
      "explFr": "Le fait que le ventilateur continue de fonctionner indique que l'alimentation générale et le moteur du ventilateur sont opérationnels. Le bruit de claquement avant la perte de chaleur suggère un défaut localisé (comme un élément chauffant ou une connexion qui a lâché), ce qui oriente le test de continuité vers cette section spécifique plutôt que vers l'ensemble du système.",
      "explEn": "The fact that the fan continues to run indicates that the general power supply and the fan motor are operational. The clicking sound before the loss of heat suggests a localized fault (such as a heating element or a connection that failed), which directs the continuity test toward that specific section rather than the whole system."
     }
    ]
   }
  ]
 }
];

const UI_TEXT = {
  fr: {
    appName: "ÉlectricitéQuest",
    tagline: "Deviens expert(e) en électricité — DEP 5295",
    start: "Commencer l'aventure",
    yourName: "Ton prénom",
    chooseAvatar: "Choisis ton avatar",
    map: "Mon parcours",
    badges: "Badges",
    trophies: "Trophées",
    leaderboard: "Palmarès",
    profile: "Profil",
    level: "Niveau",
    xp: "XP",
    locked: "Verrouillé",
    completeToUnlock: "Termine la quête précédente pour déverrouiller",
    startQuest: "Démarrer la quête",
    retryQuest: "Reprendre la quête",
    question: "Question",
    of: "sur",
    submit: "Valider",
    next: "Suivant",
    finish: "Terminer",
    correct: "Bonne réponse!",
    incorrect: "Ce n'est pas ça...",
    questResult: "Résultat de la quête",
    score: "Score",
    passed: "Quête réussie! 🎉",
    failed: "Pas encore réussi — réessaie pour débloquer le badge (seuil: 70%)",
    backToMap: "Retour à la carte",
    newBadge: "Nouveau badge!",
    newTrophy: "Nouveau trophée!",
    hours: "heures",
    switchLang: "EN",
    privacy: "Confidentialité",
    resetProgress: "Réinitialiser tout",
    confirmReset: "Tout réinitialiser? Ton avatar, tes badges, trophées et toute ta progression seront effacés. Cette action est irréversible.",
    installApp: "Installer l'application",
    rank: "Rang",
    you: "Toi",
    leaderboardNote: "Classement local (démo) — un vrai palmarès de classe nécessite un serveur partagé.",
    completedQuests: "quêtes complétées",
    chooseVehicle: "Choisis ta machine",
    myVehicle: "Ta machine",
    vehicleGrows: "Évolue avec ton expérience",
    maxSize: "Taille maximale atteinte!",
    trueLabel: "Vrai",
    falseLabel: "Faux",
    tfPrompt: "Vrai ou faux?",
    masteredLabel: "compétences maîtrisées",
    tierLabel: "Palier",
    matchPrompt: "Touche un terme, puis sa définition qui correspond.",
    scenarioLabel: "Mise en situation",
    masteryUnlocked: "Compétence maîtrisée — badge débloqué!",
    accessCodeTitle: "Code d'accès",
    accessCodePrompt: "Entre le code d'accès fourni par ton enseignant pour continuer.",
    accessCodeTrialOver: "Ton essai gratuit de 7 jours est terminé. Entre le code d'accès fourni par ton centre de formation pour continuer.",
    accessCodePlaceholder: "Code d'accès",
    accessCodeSubmit: "Valider",
    accessCodeChecking: "Vérification...",
    accessCodeInvalid: "Code invalide ou inactif. Vérifie auprès de ton enseignant.",
    accessCodeOffline: "Connexion Internet requise pour valider ton code la première fois. Réessaie une fois connecté.",
    accessCodeNotConfigured: "L'application n'est pas encore configurée. Contacte ton enseignant.",
    welcomeHeading: "Comment ça marche",
    welcomeIntro: "Avant de commencer, voici un survol rapide de l'application.",
    welcomeSteps: [
      { icon: "🗺️", title: "Mon parcours", text: "Chaque compétence du programme est une quête sur la carte. Termine-les dans l'ordre pour avancer." },
      { icon: "📝", title: "Questions", text: "Réponds à des questions à choix multiples et vrai/faux liées à chaque compétence." },
      { icon: "🎖️", title: "Badges", text: "Réussis une quête à 70% ou plus pour débloquer son badge." },
      { icon: "🏆", title: "Trophées", text: "Décroche des trophées spéciaux pour tes exploits et ta progression." },
      { icon: "📊", title: "Palmarès", text: "Compare ton avancement avec celui du reste de la classe." },
      { icon: "👷", title: "Ton avatar", text: "Choisis ton avatar — il évolue à mesure que tu gagnes de l'expérience." }
    ]
  },
  en: {
    appName: "ElectricityQuest",
    tagline: "Become an electrical expert — DVS 5295",
    start: "Start the adventure",
    yourName: "Your first name",
    chooseAvatar: "Choose your avatar",
    map: "My path",
    badges: "Badges",
    trophies: "Trophies",
    leaderboard: "Leaderboard",
    profile: "Profile",
    level: "Level",
    xp: "XP",
    locked: "Locked",
    completeToUnlock: "Complete the previous quest to unlock",
    startQuest: "Start quest",
    retryQuest: "Retry quest",
    question: "Question",
    of: "of",
    submit: "Submit",
    next: "Next",
    finish: "Finish",
    correct: "Correct!",
    incorrect: "Not quite...",
    questResult: "Quest Result",
    score: "Score",
    passed: "Quest passed! 🎉",
    failed: "Not passed yet — try again to unlock the badge (threshold: 70%)",
    backToMap: "Back to map",
    newBadge: "New badge!",
    newTrophy: "New trophy!",
    hours: "hours",
    switchLang: "FR",
    privacy: "Privacy",
    resetProgress: "Reset everything",
    confirmReset: "Reset everything? Your avatar, badges, trophies and all progress will be erased. This cannot be undone.",
    installApp: "Install the app",
    rank: "Rank",
    you: "You",
    leaderboardNote: "Local (demo) ranking — a real class leaderboard needs a shared server.",
    completedQuests: "quests completed",
    chooseVehicle: "Choose your machine",
    myVehicle: "Your machine",
    vehicleGrows: "Evolves with your experience",
    maxSize: "Maximum size reached!",
    trueLabel: "True",
    falseLabel: "False",
    tfPrompt: "True or false?",
    masteredLabel: "competencies mastered",
    tierLabel: "Tier",
    matchPrompt: "Tap a term, then its matching definition.",
    scenarioLabel: "Scenario",
    masteryUnlocked: "Competency mastered — badge unlocked!",
    accessCodeTitle: "Access code",
    accessCodePrompt: "Enter the access code given by your teacher to continue.",
    accessCodeTrialOver: "Your free 7-day trial has ended. Enter the access code provided by your training center to continue.",
    accessCodePlaceholder: "Access code",
    accessCodeSubmit: "Submit",
    accessCodeChecking: "Checking...",
    accessCodeInvalid: "Invalid or inactive code. Check with your teacher.",
    accessCodeOffline: "Internet connection required to validate your code the first time. Try again once connected.",
    accessCodeNotConfigured: "The app isn't configured yet. Contact your teacher.",
    welcomeHeading: "How it works",
    welcomeIntro: "Before you start, here's a quick overview of the app.",
    welcomeSteps: [
      { icon: "🗺️", title: "My path", text: "Each program competency is a quest on the map. Complete them in order to move forward." },
      { icon: "📝", title: "Questions", text: "Answer multiple-choice and true/false questions tied to each competency." },
      { icon: "🎖️", title: "Badges", text: "Pass a quest with 70% or more to unlock its badge." },
      { icon: "🏆", title: "Trophies", text: "Earn special trophies for your achievements and progress." },
      { icon: "📊", title: "Leaderboard", text: "Compare your progress with the rest of the class." },
      { icon: "👷", title: "Your avatar", text: "Choose your avatar — it evolves as you earn experience." }
    ]
  }
};

/* ---- Paliers de niveau (basés sur XP total) ---- */
const LEVELS = [
  { min: 0,    name_fr: "Novice",       name_en: "Novice",     avatarStage: 0 },
  { min: 200,  name_fr: "Apprenti(e)",  name_en: "Apprentice", avatarStage: 2 },
  { min: 500,  name_fr: "Compétent(e)", name_en: "Competent",  avatarStage: 4 },
  { min: 1000, name_fr: "Chevronné(e)", name_en: "Seasoned",   avatarStage: 6 },
  { min: 2000, name_fr: "Expert(e)",    name_en: "Expert",     avatarStage: 9 },
  { min: 3500, name_fr: "Maître",       name_en: "Master",     avatarStage: 11 }
];

/* ---- Personnages d'avatar (ouvriers de chantier / camionneurs) ----
   Chaque personnage est dessiné en SVG dans app.js (fonction AVATAR_SVG).
   "accent" = couleur par défaut du casque/gilet, modifiable via la
   sélection de couleur. */
const AVATAR_CHARACTERS = [
 {
  "id": "renard",
  "name_fr": "Renard",
  "name_en": "Fox",
  "title_fr": "Le Vif",
  "title_en": "The Quick One",
  "stages": [
   "🥚",
   "🥚",
   "🐶",
   "🐶",
   "🦊",
   "🦊",
   "🦊",
   "🦊",
   "🦊",
   "🦊",
   "🦊",
   "🦊"
  ]
 },
 {
  "id": "loup",
  "name_fr": "Loup",
  "name_en": "Wolf",
  "title_fr": "Le Chef de meute",
  "title_en": "The Pack Leader",
  "stages": [
   "🥚",
   "🥚",
   "🐶",
   "🐶",
   "🐺",
   "🐺",
   "🐺",
   "🐺",
   "🐺",
   "🐺",
   "🐺",
   "🐺"
  ]
 },
 {
  "id": "chauvesouris",
  "name_fr": "Chauve-souris",
  "name_en": "Bat",
  "title_fr": "Le Précis",
  "title_en": "The Precise One",
  "stages": [
   "🥚",
   "🥚",
   "🦇",
   "🦇",
   "🦇",
   "🦇",
   "🦇",
   "🦇",
   "🦇",
   "🦇",
   "🦇",
   "🦇"
  ]
 },
 {
  "id": "tigre",
  "name_fr": "Tigre",
  "name_en": "Tiger",
  "title_fr": "L'Électrique",
  "title_en": "The Electric One",
  "stages": [
   "🥚",
   "🥚",
   "🐱",
   "🐱",
   "🐯",
   "🐯",
   "🐯",
   "🐯",
   "🐯",
   "🐯",
   "🐯",
   "🐯"
  ]
 }
];

const AVATAR_COLORS = [
  { id: "jaune",  hex: "#f7b500", name_fr: "Jaune sécurité", name_en: "Safety Yellow" },
  { id: "orange", hex: "#ff7a1a", name_fr: "Orange chantier", name_en: "Site Orange" },
  { id: "vert",   hex: "#3bb54a", name_fr: "Vert forêt", name_en: "Forest Green" },
  { id: "bleu",   hex: "#2a7de1", name_fr: "Bleu acier", name_en: "Steel Blue" },
  { id: "rouge",  hex: "#e13c3c", name_fr: "Rouge feu", name_en: "Fire Red" }
];

/* ---- Machines de l'élève (grossissent avec le XP) ----
   Le dessin SVG de chaque machine est dans app.js (fonction vehicleSVG). */
const VEHICLE_TYPES = [
  { id: "camion", name_fr: "Camion à benne", name_en: "Dump Truck" },
  { id: "pelle", name_fr: "Pelle mécanique", name_en: "Excavator" },
  { id: "bouteur", name_fr: "Bouteur", name_en: "Bulldozer" },
  { id: "chargeuse", name_fr: "Chargeuse", name_en: "Loader" }
];

/* La hauteur affichée (en pixels) interpole entre minHeight et maxHeight
   selon le XP actuel de l'élève (voir vehicleHeight() dans app.js). La
   largeur est calculée automatiquement pour respecter les proportions
   propres à chaque machine (voir VEHICLE_VIEWBOX dans app.js). */
const VEHICLE_GROWTH = { minHeight: 78, maxHeight: 178, maxXP: 3500 };

/* ---- Commandes de cabine (questions basées sur une image) ----
   Chaque machine a 4 commandes numérotées, dessinées par cabinSVG()
   dans app.js aux coordonnées cx/cy (viewBox 0 0 360 220). Ces mêmes
   coordonnées servent à la fois à dessiner l'illustration et à
   positionner les zones cliquables des questions de type "hotspot" —
   l'image et les questions restent donc toujours alignées.
   Configuration générique à titre pédagogique — la disposition réelle
   varie selon le fabricant et le modèle (à valider par l'enseignant). */
const CABIN_CONTROLS = {
  pelle: [
    { num: 1, cx: 100, cy: 168, kind: "joystick",
      label_fr: "Joystick gauche", label_en: "Left joystick",
      desc_fr: "Contrôle la rotation de la tourelle et le godet",
      desc_en: "Controls turret rotation and the bucket" },
    { num: 2, cx: 210, cy: 168, kind: "joystick",
      label_fr: "Joystick droit", label_en: "Right joystick",
      desc_fr: "Contrôle la flèche et le bras (balancier)",
      desc_en: "Controls the boom and the stick (arm)" },
    { num: 3, cx: 160, cy: 205, kind: "pedal",
      label_fr: "Pédales de translation", label_en: "Travel pedals",
      desc_fr: "Font avancer ou reculer les chenilles",
      desc_en: "Move the tracks forward or backward" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ],
  bouteur: [
    { num: 1, cx: 110, cy: 172, kind: "lever",
      label_fr: "Levier de la lame", label_en: "Blade control lever",
      desc_fr: "Lève, abaisse et incline la lame",
      desc_en: "Raises, lowers and tilts the blade" },
    { num: 2, cx: 210, cy: 172, kind: "lever",
      label_fr: "Manettes de direction (chenilles)", label_en: "Steering clutch levers",
      desc_fr: "Contrôlent la direction en ralentissant une chenille à la fois",
      desc_en: "Control steering by slowing one track at a time" },
    { num: 3, cx: 160, cy: 205, kind: "pedal",
      label_fr: "Pédale de frein", label_en: "Brake pedal",
      desc_fr: "Ralentit ou immobilise la machine",
      desc_en: "Slows or stops the machine" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ],
  chargeuse: [
    { num: 1, cx: 210, cy: 168, kind: "lever",
      label_fr: "Levier de commande du godet", label_en: "Bucket control lever",
      desc_fr: "Lève, abaisse et bascule le godet",
      desc_en: "Raises, lowers and tilts the bucket" },
    { num: 2, cx: 110, cy: 172, kind: "wheel",
      label_fr: "Volant de direction", label_en: "Steering wheel",
      desc_fr: "Contrôle la direction des roues",
      desc_en: "Controls the direction of the wheels" },
    { num: 3, cx: 160, cy: 205, kind: "pedal",
      label_fr: "Pédale d'accélérateur", label_en: "Accelerator pedal",
      desc_fr: "Contrôle le régime moteur et la vitesse",
      desc_en: "Controls engine speed and travel speed" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ],
  niveleuse: [
    { num: 1, cx: 190, cy: 172, kind: "lever",
      label_fr: "Leviers de la lame", label_en: "Blade control levers",
      desc_fr: "Ajustent l'angle, la hauteur et l'inclinaison de la lame",
      desc_en: "Adjust the blade's angle, height and tilt" },
    { num: 2, cx: 100, cy: 172, kind: "wheel",
      label_fr: "Volant de direction", label_en: "Steering wheel",
      desc_fr: "Contrôle la direction des roues avant",
      desc_en: "Controls the direction of the front wheels" },
    { num: 3, cx: 255, cy: 172, kind: "switch",
      label_fr: "Commande d'articulation du châssis", label_en: "Frame articulation control",
      desc_fr: "Articule le châssis pour resserrer le rayon de braquage",
      desc_en: "Articulates the frame to tighten the turning radius" },
    { num: 4, cx: 320, cy: 150, kind: "button",
      label_fr: "Klaxon", label_en: "Horn button",
      desc_fr: "Avertit les personnes autour de la machine avant un mouvement",
      desc_en: "Warns people around the machine before a movement" }
  ]
};

/* ---- Trophées (méta-réussites) ---- */
const TROPHIES = [
  { id: "t_first", name_fr: "Premier pas", name_en: "First Step", icon: "🥉",
    desc_fr: "Réussir ton premier palier de compétence", desc_en: "Pass your first competency tier",
    check: (state) => Object.keys(state.completed).length >= 1 },
  { id: "t_half", name_fr: "Mi-parcours", name_en: "Halfway There", icon: "🥈",
    desc_fr: "Maîtriser 10 compétences (palier Avancé)", desc_en: "Master 10 competencies (Advanced tier)",
    check: (state) => (state.badges || []).length >= 10 },
  { id: "t_all", name_fr: "Diplômé virtuel", name_en: "Virtual Graduate", icon: "🏆",
    desc_fr: "Maîtriser les 20 compétences du programme", desc_en: "Master all 20 competencies of the program",
    check: (state) => (state.badges || []).length >= 20 },
  { id: "t_perfect", name_fr: "Sans faute", name_en: "Flawless", icon: "💯",
    desc_fr: "Obtenir 100% à un palier", desc_en: "Score 100% on a tier",
    check: (state) => Object.values(state.completed).some(s => s.score === 100) },
  { id: "t_safety", name_fr: "Zone sécurité", name_en: "Safety Zone", icon: "🦺",
    desc_fr: "Réussir le palier Débutant du module Santé et sécurité", desc_en: "Pass the Beginner tier of the Health & Safety module",
    check: (state) => state.completed["c02_1"] && state.completed["c02_1"].score >= 70 },
  { id: "t_streak", name_fr: "Assidu", name_en: "Dedicated", icon: "🔥",
    desc_fr: "Se connecter 3 jours différents", desc_en: "Log in on 3 different days",
    check: (state) => (state.loginDays || []).length >= 3 },
  { id: "t_podium", name_fr: "Sur le podium", name_en: "On the Podium", icon: "🏅",
    desc_fr: "Atteindre le top 3 du palmarès", desc_en: "Reach the top 3 of the leaderboard",
    check: (state) => (LEADERBOARD_SEED.filter(p => p.xp > state.xp).length) < 3 },
  { id: "t_matcher", name_fr: "Bon association", name_en: "Great Match", icon: "🧩",
    desc_fr: "Réussir 15 questions d'association de termes", desc_en: "Complete 15 term-matching questions",
    check: (state) => (state.matchesCompleted || 0) >= 15 }
];

/* ---- Palmarès (données d'exemple — classe fictive) ----
   À remplacer par de vraies données élèves lorsqu'un backend
   partagé sera branché (voir README). */
const LEADERBOARD_SEED = [
  { name: "Mia-Rose T.", xp: 3120, avatarChar: "operatrice_bouteur", avatarColor: "vert" },
  { name: "Xavier L.", xp: 2450, avatarChar: "contremaitre", avatarColor: "bleu" },
  { name: "Sam D.", xp: 1780, avatarChar: "camionneur", avatarColor: "orange" },
  { name: "Alicia P.", xp: 1290, avatarChar: "camionneuse", avatarColor: "rouge" },
  { name: "Kevin R.", xp: 860, avatarChar: "contremaitre", avatarColor: "jaune" },
  { name: "Noémie B.", xp: 430, avatarChar: "mecanicienne", avatarColor: "bleu" },
  { name: "Tommy G.", xp: 120, avatarChar: "camionneur", avatarColor: "vert" }
];
