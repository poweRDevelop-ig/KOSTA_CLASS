
public class Objedt01 {

	public static void main(String[] args) {
		Student stObj01 = new Student();
		
		stObj01.id = 20221004;
		stObj01.name = "홍길순";
		stObj01.printInfo();
		
		Student stObj02 = new Student();
		stObj02.insertRecord(20221005, "홍길동");
		stObj02.printInfo();
	}

}
