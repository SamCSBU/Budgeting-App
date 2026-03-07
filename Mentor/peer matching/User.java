public abstract class User{
    //PLAN: Matching software that matches user with either mentor or peers
    //instant variables in User: name, career/intened career, interests, location, age, gender, college
    // Student and Mentor classes extend user
    // student : mandatory: year, major, 
    // student : optional: minor, clubs
    //Mentor: mandatory: job title, company, Degree
    //Mentor: optional: 
    
    /*Possible Methods:
    - create new user
    - find mentor (use database)
        - find based on different things: college, location, company
    - find peers (use database)
    */

    private String name;
    private String[] interests;
    private String location;
    private int age;
    private String gender;
    private String college;
    private static int numUsers = 0;
    private static ArrayList<Mentor> Mentors = new ArrayList<Mentor>();
    private static ArrayList<Student> Students = new ArrayList<Student>();
}