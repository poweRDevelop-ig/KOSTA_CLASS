class InvalidException extends Exception {
	public InvalidException(String s) {
		super(s);
	}
}
public class Exception05 {

	void check(int weight) throws InvalidException {
			if (weight < 100) {
				throw new InvalidException("InvalidException 클래스 호출입니다.");
			}
		}

	
	public static void main(String[] args) {
		Exception05 obj = new Exception05();
		try {
			obj.check(60);
		}
		catch(InvalidException ex) {
			System.out.println("예외처리 입니다.");
			System.out.println(ex.getMessage());
		}
	}
}

