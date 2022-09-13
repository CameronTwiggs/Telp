package backendrest.demo.Models;

import javax.persistence.*;


@Entity
public class User {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private long id;
    @Column
    private String first_name;
    @Column
    private String last_name;
    @Column
    private String bio;
    @Column
    private String uniqueID;
// Getters
    public long getId() {
        return id;
    }

    public String getFirst_name() {
        return first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public String getBio() {
        return bio;
    }
    public String getUniqueID(){return uniqueID;}

// Setters
    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }
    public void setUniqueID(String uniqueID) {
        this.uniqueID = uniqueID;
    }
}
