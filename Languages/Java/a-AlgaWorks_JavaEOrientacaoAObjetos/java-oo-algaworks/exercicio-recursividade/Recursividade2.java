public class Recursividade2 {
    public static void main(String[] args) {
        int valor = 10;
        double resultado = sequenciaSimples(valor);
        somaExemplificada(valor);
        System.out.println("A soma de todos os valores da P.A simples até " + valor + " é: " + resultado);
    }


    public static double sequenciaSimples(double numero) {
        double resultadoDaPa;
        if (numero == 1) {
            return 1;
        } else {
            resultadoDaPa = (1 / numero) + sequenciaSimples((numero) - 1);
        }
        return resultadoDaPa;
    }

    public static void somaExemplificada(int valor) {
        double termoAtual = 1.0;
        System.out.println("Demonstrando a soma dos termos em sequencia");
        for (int i = 1; i < valor; i++) {
            System.out.println(termoAtual + " + " + (1.0 / (i + 1)) + " = " + (termoAtual + (1.0 / (i + 1))));
            termoAtual = ((termoAtual) + (1.0 / (i + 1))); // Calcula o próximo termo
        }
    }

}


