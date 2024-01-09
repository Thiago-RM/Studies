public class Recursividade4 {
    public static void main(String[] args) {
        int valor = 10;
        int resultadoSequenciaFibonacci = fibonacci(valor);
        System.out.println(resultadoSequenciaFibonacci);

        for (int i = 0; i < (valor -1); i++) {
            if (i > 0) {
                System.out.println(fibonacci(i) + " + " + fibonacci(i+ 1) + " = " + fibonacci(i + 2) );
            }
        }
    }


    public static int fibonacci(int contador) {

        int sequencia;

        if (contador == 0 || contador == 1) {
            return contador;
        }

        sequencia = fibonacci(contador - 1) + fibonacci(contador - 2);
        return sequencia;

    }

}
