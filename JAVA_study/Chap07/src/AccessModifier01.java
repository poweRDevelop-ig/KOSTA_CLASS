
public class AccessModifier01 {
	
	public static void main(String[] args) {
		Dog dogObj = new Dog();
		
		dogObj.breed = "포메라리안";
		dogObj.color = "잡채";
		
		System.out.println("강아지 품종 : " + dogObj.breed);
		System.out.println("강아지 색깔 : " + dogObj.color);
		
		dogObj.bowwow();
	}

}
