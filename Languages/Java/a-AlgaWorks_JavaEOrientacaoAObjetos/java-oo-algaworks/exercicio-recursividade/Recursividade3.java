public class Recursividade3 {

    public static void main(String[] args) {
        int x = 2; // Número base
        int k = 3; // Expoente
        int resposta = potencia(x, k);
        System.out.println(x + " elevado a " + k + " é igual a " + resposta);
    }

    public static int potencia(int x, int k) {
        if (k == 0) {
            return 1; // Qualquer número elevado a 0 é 1
        } else {
            return x * potencia(x, k - 1);
        }
    }
}
