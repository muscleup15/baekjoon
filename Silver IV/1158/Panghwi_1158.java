import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

import java.util.LinkedList;
import java.util.Queue;

public class Panghwi_1158 {
    public static void main(String[] args) throws IOException {
//        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedReader br = new BufferedReader(new FileReader("/Users/panghwi/Library/Mobile Documents/com~apple~TextEdit/Documents/예제.txt"));

        StringTokenizer st = new StringTokenizer(br.readLine());
        int size = Integer.parseInt(st.nextToken());
        int inputNum = Integer.parseInt(st.nextToken());

        Queue<Integer> queue = new LinkedList<>();

        for(int i = 1; i<=size;i++){
            queue.offer(i);
        }
        System.out.printf("<");
        while(queue.size() != 1){
            for(int i = 1;i<inputNum;i++){
                queue.offer(queue.poll()); //1, 2 뒤로 감
            }
            int num = queue.poll(); // 3 제거
            System.out.printf("%d, " ,num);
        }
        System.out.printf("%d",queue.poll());
        System.out.printf(">");









    }
}
