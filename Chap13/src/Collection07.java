import java.util.TreeMap;
import java.util.Map.Entry;

public class Collection07 {
	public static void main(String[] args) {
		
		TreeMap<Integer, String> str = new TreeMap<Integer, String>();
		
		str.put(1, "A");
		str.put(2, "B");
		str.put(3, "C");
		
		System.out.println(str);
		
		System.out.print("Keys : ");
		for (Integer key : str.keySet()) {
			System.out.print(key);
			System.out.print(", ");
		}
		
		System.out.println();
		System.out.print("Values : ");
		for (String value: str.values()) {
			System.out.print(value);
			System.out.print(", ");
		}
		
		System.out.println();
		System.out.print("Keys=Values : ");
		for (Entry<Integer, String> entry : str.entrySet()) {
			System.out.print(entry);
			System.out.print(", ");
		}

	}

}
