package com.section03;

import java.util.Calendar;

public class Package09 {

	public static void main(String[] args) {
		
		Calendar calendar = Calendar.getInstance();
		System.out.println("현재 날짜 : ");
		System.out.println(calendar.get(Calendar.YEAR) + "년");
		System.out.println(calendar.get(Calendar.MONTH)+1 + "월");
		System.out.println(calendar.get(Calendar.DATE) + "일");

	}

}
