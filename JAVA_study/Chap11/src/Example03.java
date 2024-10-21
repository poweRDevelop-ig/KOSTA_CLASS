
public class Example03 {

	public static void main(String[] args) {
		
		int a[] = new int[2];
		try {
			System.out.println("잘못된 요소에 접근 : " + a[3]);
		}
		catch (Exception e) {
			System.out.println("예외 발생 어레이인덱스아웃오브바운드익셉션" + e);
		}
		finally {
			System.out.println("빠이널리는 향상 실행");
		}

	}

}
