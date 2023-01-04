import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Panghwi {
    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedReader br = new BufferedReader(new FileReader("/Users/panghwi/Library/Mobile Documents/com~apple~TextEdit/Documents/예제.txt"));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());

        String initialName = br.readLine();
        int nameLength = initialName.length();
        String[] name = initialName.split("");

        for (int i = 0; i < n-1; i++) {
            String nextName = br.readLine();
            String[] comparedName = nextName.split("");
            for (int j = 0; j < nameLength; j++) {
                if (!name[j].equals(comparedName[j])) {
                    name[j] = "?";
                }

            }
        }
        for(int i = 0;i<nameLength;i++){
            System.out.print(name[i]);
        }
        br.close();
    }
}
