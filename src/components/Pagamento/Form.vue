<template>
    <form class="form-pagamento" @submit.prevent>
        <h2>Pagamento</h2>
        <input type="text" name="cartao" placeholder="Cartao">
        <input type="text" name="nome empreso" placeholder="Nome Empreso">
        <div>
            <input type="text" name="validade" placeholder="Validade">
            <input type="text" name="CVV" placeholder="CVV"> 
        </div>
        <button>Pagar agora</button>
    </form>
</template>
<script setup></script>
<style scoped>
.form-pagamento{
    /* border: 2px solid black; */
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 5px;
    height: 600px;
    margin-left: 52px;
}
.form-pagamento > h2 {
    margin-bottom: 20px;
}

.form-pagamento > input, button {
    width: 310px;
    padding: 8px;
    border: 2px solid black;
}
div > input {
    padding: 10px;
    width: 155px;;
    border: 2px solid black; 
}
button{
    background-color: black;
    color: white;
    font-weight: bold;
    padding: 8px;
    margin-top: 70px;
}



</style>