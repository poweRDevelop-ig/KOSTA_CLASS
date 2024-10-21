
public class Example01 {
	public static void main(String[] args) {
		
		try {
			int a = 0;
			int b = 5/a;
		}
		
		catch (ArithmeticException e) {
			System.out.println("0으로 나누기가 맞냐?");
		}
		System.out.println("트케문의 외부 문장임ㅋ");
	}
}
