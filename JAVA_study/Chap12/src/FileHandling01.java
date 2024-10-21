import java.io.File;

public class FileHandling01 {
	public static void main (String[] args) {
		
		File finfo = new File("src\\Example01.java");
		
		if (finfo.exists()) {
			System.out.println("파일 이름:" + finfo.getName());
			System.out.println("파일 경로:" + finfo.getAbsolutePath());
			System.out.println("파일 쓰기가 가능한가?:" + finfo.canWrite());
			System.out.println("파일 읽기가 가능한가?:" + finfo.canRead());
			System.out.println("파일 크기:" + finfo.length());
		}else {
			System.out.println("존재하는 파일이 아닙니다.");
		}
				
	}
}
