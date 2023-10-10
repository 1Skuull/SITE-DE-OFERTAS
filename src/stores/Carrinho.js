import { defineStore } from "pinia"
import { ref } from "vue"

export const useCarrinhoStore = defineStore('carrinho', () => {

    const produtos = ref([
      {
        id: "1",
        img: "",
        title: "Hotel Long Beach",
        descricao: "2 diarias em um quarto com vista para o mar",
        preco: "R$ 100,00"
      },
      {
        id: "2",
        img: "",
        title: "Hotel Long Beach",
        descricao: "2 diarias em um quarto com vista para o mar",
        preco: "R$ 100,00"
      },
      {
        id: "3",
        img: "",
        title: "Hotel Long Beach",
        descricao: "2 diarias em um quarto com vista para o mar",
        preco: "R$ 100,00"
      },
      {
        id: "4",
        img: "",
        title: "Hotel Long Beach",
        descricao: "2 diarias em um quarto com vista para o mar",
        preco: "R$ 100,00"
      },
    ])

    const carrinhos = ref([
      {
        id: "1",
        img: "",
        title: "Hotel Long Beach",
        descricao: "2 diarias em um quarto com vista para o mar",
        preco: "R$ 100,00"
      },
    ])
    
    return { produtos, carrinhos }
  })