public class Recursividade5 {

    public static void main(String[] args) {
        int valor = 9;
        int respostaSeqPell = seqPell(valor);

        System.out.println(respostaSeqPell);

        System.out.println(0);
        System.out.println(1);


        for (int i = 0; i < (valor - 1); i++) {

            if (i >= 0) {
                System.out.println(seqPell(i) + " + " + 2 * seqPell(i + 1) + " = " + seqPell(i + 2));
            }
        }
    }

    public static int seqPell(int numero) {

        int resultadoSeqPell = 0;

        if (numero == 0) {
            return 0;
        } else if (numero == 1) {
            return 1;
        }

        if (numero > 0) {
            resultadoSeqPell = 2 * seqPell(numero - 1) + seqPell(numero - 2);
            return resultadoSeqPell;
        }

        return resultadoSeqPell;
    }
}
