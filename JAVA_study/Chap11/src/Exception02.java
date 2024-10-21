import java.util.Scanner;

public class Exception02 {
	public static void main (String[] args) {
		
		Scanner s = new Scanner(System.in);
		System.out.println("숫자를 입력하세요");
		int num = s.nextInt();
				
		int arr[] = new int[5];
;
		
		//try블록
		try {
			arr[num] = 10 / num;
			System.out.println(arr[num]);
		}
		catch(ArithmeticException e) {
			System.out.println("0이 아닌 값을 입력하세요");
			System.out.println(e.getMessage());
		}
		catch(ArrayIndexOutOfBoundsException e) {
			System.out.println("올바른 배열의 인덱스를 입력하세요");
			System.out.println(e.getMessage());
		}
		System.out.println("try~catch 블록의 외부 문장입니다.");
	}
}
