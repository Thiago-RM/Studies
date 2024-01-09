public class Recursividade1 {

    public static void main(String[] args) {
        int valor = 10;
        int resultado = paSimples(valor);

        int soma = 1;
        System.out.println("Demonstrando a soma dos termos em sequencia");
        for (int i = 1; i < valor; i++) {
            System.out.println(soma + " + " + (i + 1) + " = " + ((soma + 1) + i));
            soma = (soma + 1) + i; // Calcula o próximo termo
        }
        System.out.println("A soma de todos os valores da P.A simples até " + valor + " é: " + resultado);

    }


    public static int paSimples(int numero) {


        int resultadoDaPa;
        if (numero == 1) {
            return 1;
        } else {
            resultadoDaPa = numero + paSimples(numero - 1);
        }
        return resultadoDaPa;
    }
}
