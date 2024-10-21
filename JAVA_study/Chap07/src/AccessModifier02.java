
public class AccessModifier02 {

	public static void main(String[] args) {
		Dog obj = new Dog();
		
		obj.breed = "포메라리안";
		obj.color = "잡채";
		
		System.out.println("강아지 품종 : " + obj.breed);
		System.out.println("강아지 색깔 : " + obj.color);
		obj.bowwow();
		obj.age = 10;
		System.out.println("강아지 나이 : " + obj.age);
		obj.run();
	}

}
