import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;
public class Panghwi_1037 {
    public static void main(String[] args) throws IOException{
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedReader br = new BufferedReader(new FileReader("/Users/panghwi/Library/Mobile Documents/com~apple~TextEdit/Documents/예제.txt"));
        int TotalNum = Integer.parseInt(br.readLine());

        StringTokenizer st = new StringTokenizer(br.readLine());
        int max = Integer.MIN_VALUE;
        int min = Integer.MAX_VALUE;

            while(TotalNum-->0){
                int N = Integer.parseInt(st.nextToken());
                max = max > N ? max : N;
                min = min < N ? min : N;
            }
            System.out.println(max*min);







    }
}
