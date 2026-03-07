// evan sam katie maddie
// we r such good programmers
import java.util.Scanner;

public class home{
    public static void main(String[] args){
       Scanner scanner = new Scanner(System.in);

        System.out.print("Enter username: ");
        String name = scanner.nextLine();
        while(name.equals("")){
            System.out.print("Please enter a valid username: ");
            name = scanner.nextLine();
        }
    }
}
