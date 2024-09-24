
public class Example02 {

	public static void main(String[] args) {
		
		try {
			Integer in = new Integer("abc");
			in.intValue();
		}
		catch(ArithmeticException e) {
			System.out.println("예외 발생 아릿쓰메띡익쎕숀" + e);
		}
		catch(NumberFormatException e) {
			System.out.println("예외 발생 넘버뽀멧익쏍숀" + e);
		}
		System.out.println("트케문외부문");

	}

}
