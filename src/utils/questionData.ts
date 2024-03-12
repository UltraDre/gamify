export const imageGuessingData = [
  {
    id: "1",
    imageUrl:
      "https://res.cloudinary.com/dqd5vv1ln/image/upload/v1706399121/Gamify/05EJgFQEnogKigDmIVj1VI1-1.fit_lim.size_840x473.v1685049487_ua00v4.jpg",
    question: "it is used for selecting or dragging",
    answer: "mouse",
  },
  {
    id: "2",
    imageUrl:
      "https://res.cloudinary.com/dgdoymhtj/image/upload/v1707240970/product_images/Captura_macro_aproximada_da_placa_do_ciberespa%C3%A7o_do_circuito_com_microchip_do_componente_da_placa-m%C3%A3e_do_computador_com_estrutura_do_chip_arte_gerada_pela_rede_neural_n%C3%A3o_se_baseia_em_nenhuma_cena_ou_padr%C3%A3o_real___Fo_kcyxcj.jpg",
    question: "ram, fan, processor and more are embedded on it",
    answer: "motherboard",
  },
  {
    id: "3",
    imageUrl:
      "https://res.cloudinary.com/dgdoymhtj/image/upload/v1707240985/product_images/Mechanical_Keyboard_Gaming_Mouse_dsldok.jpg",
    question: "to type in alphabets or more",
    answer: "keyboard",
  },
];

export const quizLadderData = [
  {
    id: "1",
    question: "What is the purpose of the 'break' statement in a loop?",
    answers: [
      {
        alpha: "a",
        answer: "To terminate the entire program",
      },
      {
        alpha: "b",
        answer: "To skip the current iteration and move to the next one",
      },
      {
        alpha: "c",
        answer: "To pause the execution of the program",
      },
      {
        alpha: "d",
        answer: "To print a message to the console",
      },
    ],
    correct_answer: "b",
  },
  {
    id: "2",
    question: "What does CSS stand for in web development?",
    answers: [
      {
        alpha: "a",
        answer: " Computer Style Sheets",
      },
      {
        alpha: "b",
        answer: "Creative Style Sheets",
      },
      {
        alpha: "c",
        answer: "Cascading Style Sheets",
      },
      {
        alpha: "d",
        answer: "Colorful Style Sheets",
      },
    ],
    correct_answer: "c",
  },
  {
    id: "3",
    question: "What does the acronym HTML stand for in web development?",
    answers: [
      {
        alpha: "a",
        answer: "Hyper Transfer Markup Language",
      },
      {
        alpha: "b",
        answer: "High-Level Text Markup Language",
      },
      {
        alpha: "c",
        answer: "Hyper Text Makeup Language",
      },
      {
        alpha: "d",
        answer: "Hyper Text Markup Language",
      },
    ],
    correct_answer: "d",
  },
];

export const MatchUpsData = [
  {
    _id: "1",
    codeSnippets: [
      { id: "cs1", img: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709388885/product_images/ec0e526b-ea45-40b5-8c41-622b786fedbf.png", correctAnswer: 1 },
      { id: "cs2", img: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709388777/product_images/4aec855d-6b78-4d63-a1a0-b442af4e0e15.png", correctAnswer: 3 },
      { id: "cs3", img: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709387725/product_images/4d11cb61-a96d-480b-b0c8-627b8f4c4e49.png", correctAnswer: 2 },
    ],
    expectedOutputs: [
      { id: "eo1", img: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709387780/product_images/output_false.png", correctAnswer: 3 },
      { id: "eo2", img: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709387780/product_images/output_false.png", correctAnswer: 2 },
      { id: "eo3", img: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709387683/product_images/true_output.png", correctAnswer: 1 },
    ],
  },
  {
    _id: "2",
    codeSnippets: [
      { id: "cs4", img: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709389605/product_images/41183da1-043d-40a9-81cc-aad9829f9dc9.png", correctAnswer: 3 },
      { id: "cs5", img: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709389503/product_images/8dfb93c9-47c6-470e-9c6e-72f7daf07e07.png", correctAnswer: 1 },
      { id: "cs6", img: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709389270/product_images/104b75fb-445a-4f7c-8c33-37c91bd4e596.png", correctAnswer: 2 },
    ],
    expectedOutputs: [
      { id: "eo4", img: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709389572/product_images/5a3978a2-45ae-4d90-b5ec-4b4db7ae859b.png", correctAnswer: 3 },
      { id: "eo5", img: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709389279/product_images/013db0aa-bdd7-43e8-aef0-5571c77b7fb3.png", correctAnswer: 2 },
      { id: "eo6", img: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709389520/product_images/63325ee5-49f6-4dea-a60f-93afcc9fe500.png", correctAnswer: 1 },
    ],
  },
  {
    _id: "3",
    codeSnippets: [
      { id: "cs7", img: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709720687/product_images/04f6506b-8f5b-4d95-ab57-ff59762385cb.png", correctAnswer: 3 },
      { id: "cs8", img: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709720351/product_images/872a51a0-ff3e-45df-9e95-30251cd0bc76.png", correctAnswer: 1 },
      { id: "cs9", img: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709720504/product_images/1475ff4c-6e8a-45fe-b5f6-9983da2da15e.png", correctAnswer: 2 },
    ],
    expectedOutputs: [
      { id: "eo7", img: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709389520/product_images/63325ee5-49f6-4dea-a60f-93afcc9fe500.png", correctAnswer: 3 },
      { id: "eo8", img: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709720531/product_images/c3e1c5d1-04b7-45dd-b02e-0294c100b288.png", correctAnswer: 2 },
      { id: "eo9", img: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709720320/product_images/2db34461-885a-4747-b7d2-2d355e912037.png", correctAnswer: 1 },
    ],
  },
];


export const SlidePuzzleDataThree = {
  originalImg: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709734432/product_images/image-600x600_v9kj23.png",
  slidePieces: [
    {id: 1, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709734498/product_images/Puzzle/00_pe7tm6.jpg"},
    {id: 2, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709734499/product_images/Puzzle/10_yzam5u.jpg"},
    {id: 3, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709734501/product_images/Puzzle/20_nojou3.jpg"},
    {id: 4, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709734499/product_images/Puzzle/01_oega7l.jpg"},
    {id: 5, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709734500/product_images/Puzzle/11_lo984p.jpg"},
    {id: 6, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709734502/product_images/Puzzle/21_h6cxfm.jpg"},
    {id: 7, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709734499/product_images/Puzzle/02_awpf7q.jpg"},
    {id: 8, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709734500/product_images/Puzzle/12_atfslb.jpg"},
    {id: 9, imgUrl: ""},
  ],
  imageName: "computer setup",
  puzzleSize: 3
}

export const SlidePuzzleDataFour = {
  originalImg: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709895921/product_images/Puzzle/image-600x600c_pjnkoh.png",
  slidePieces: [
    {id: 1, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709896157/product_images/Puzzle/1_xva1dm.jpg"},
    {id: 2, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709896158/product_images/Puzzle/2_l4nypc.jpg"},
    {id: 3, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709896158/product_images/Puzzle/3_uqewww.jpg"},
    {id: 4, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709896158/product_images/Puzzle/4_r2vchd.jpg"},
    {id: 5, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709896158/product_images/Puzzle/5_turc1z.jpg"},
    {id: 6, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709896158/product_images/Puzzle/6_lnqygh.jpg"},
    {id: 7, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709896159/product_images/Puzzle/7_rwwmtz.jpg"},
    {id: 8, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709896159/product_images/Puzzle/8_de6zla.jpg"},
    {id: 9, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709896159/product_images/Puzzle/9_vbctu9.jpg"},
    {id: 10, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709896159/product_images/Puzzle/10_n0pswz.jpg"},
    {id: 11, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709896161/product_images/Puzzle/11_hiz2d3.jpg"},
    {id: 12, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709896162/product_images/Puzzle/12_zh9nap.jpg"},
    {id: 13, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709896162/product_images/Puzzle/13_xjzqh0.jpg"},
    {id: 14, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709896162/product_images/Puzzle/14_moygzr.jpg"},
    {id: 15, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709896162/product_images/Puzzle/15_lsdtq2.jpg"},
    {id: 16, imgUrl: ""},
  ],
  imageName: "motherboard",
  puzzleSize: 4
}

export const SlidePuzzleDataFive = {
  originalImg: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709902852/product_images/Puzzle/image-600x600g_o2x9gt.png",
  slidePieces: [
    {id: 1, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709903130/product_images/Puzzle/00_tt8oin.jpg"},
    {id: 2, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709903130/product_images/Puzzle/10_ks0fuf.jpg"},
    {id: 3, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709903130/product_images/Puzzle/20_aqutuv.jpg    "},
    {id: 4, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709903130/product_images/Puzzle/30_a7yylo.jpg    "},
    {id: 5, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709903130/product_images/Puzzle/40_bzu57d.jpg    "},
    {id: 6, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709903289/product_images/Puzzle/01_zrwacj.jpg    "},
    {id: 7, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709903290/product_images/Puzzle/11_ex0fn1.jpg    "},
    {id: 8, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709903290/product_images/Puzzle/21_s9krt2.jpg    "},
    {id: 9, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709903290/product_images/Puzzle/31_qhlnoj.jpg"},
    {id: 10, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709903291/product_images/Puzzle/41_civq46.jpg    "},
    {id: 11, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709903439/product_images/Puzzle/02_dd53ep.jpg    "},
    {id: 12, imgUrl: " https://res.cloudinary.com/dgdoymhtj/image/upload/v1709903439/product_images/Puzzle/12_oyenu4.jpg    "},
    {id: 13, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709903439/product_images/Puzzle/22_ouwy2d.jpg    "},
    {id: 14, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709903440/product_images/Puzzle/32_oqsaqy.jpg    "},
    {id: 15, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709903441/product_images/Puzzle/42_mbbefy.jpg    "},
    {id: 16, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709903649/product_images/Puzzle/03_ktzsoc.jpg    "},
    {id: 17, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709903649/product_images/Puzzle/13_ubt4yd.jpg    "},
    {id: 18, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709903650/product_images/Puzzle/23_bli0zg.jpg    "},
    {id: 19, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709903650/product_images/Puzzle/33_fw6mpj.jpg    "},
    {id: 20, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709903651/product_images/Puzzle/43_kebv2k.jpg    "},
    {id: 21, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709903828/product_images/Puzzle/04_gro9hz.jpg    "},
    {id: 22, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709903828/product_images/Puzzle/14_qae7sj.jpg    "},
    {id: 23, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709903828/product_images/Puzzle/24_p1zjtd.jpg    "},
    {id: 24, imgUrl: "https://res.cloudinary.com/dgdoymhtj/image/upload/v1709903829/product_images/Puzzle/34_z1aql1.jpg    "},
    {id: 25, imgUrl: ""},
  ],
  imageName: "mouse",
  puzzleSize: 5
}
