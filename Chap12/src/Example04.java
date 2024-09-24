import java.io.File;
import java.io.FileInputStream;

public class Example04 {

	public static void main(String[] args) {

		try {
			File file = new File("example03.txt");
			if(!file.exists())
				file.createNewFile();
			
			FileInputStream fis = new FileInputStream(file);
			int i = 0;
			
			while ((i=fis.read())!=-1) {
				System.out.println((char)i);
			}
				fis.close();
				System.out.println("\n파일 읽기 성공");
			} catch (Exception e) {
				System.out.println(e);
			}
		}
		
	}
