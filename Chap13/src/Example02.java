import java.util.LinkedList;

public class Example02 {
	public static void main(String[] args) {
		
		LinkedList<String> cats = new LinkedList<String>();
		
		cats.add("러시안블루");
		cats.add("페르시안");
		cats.add("레그돌");
		System.out.println(cats);
		
		cats.add(1, "샴");
		System.out.println(cats);
		
		cats.set(2, "코숏");
		System.out.println(cats);
		
		cats.removeFirst();
		cats.removeLast();
		System.out.println(cats);
		cats.remove(1);
		System.out.println(cats);
		
		System.out.println(cats.size());
		System.out.println(cats.get(0));
		System.out.println(cats.contains("샴"));
		System.out.println(cats.indexOf("샴"));
	}

}
