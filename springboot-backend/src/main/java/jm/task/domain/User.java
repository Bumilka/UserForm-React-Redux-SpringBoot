package jm.task.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
public class User{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Username cannot be blank")
    @Size(min=3, message = "Please use at 3 characters")
    private String username;
    @NotBlank(message = "Surname cannot be blank")
    private  String surname;
    @NotBlank(message = "Email cannot be blank")
    @Email(message = "Email must comply with valid email address format")
    private  String email;
    //@NotBlank(message = "Select cannot be blank")
    private String selectedOption;
    private String favoriteCat;
    //@Size(min=10, message = "Please use at 10 characters")
    private  String textarea;
    private String sendToEmail;


    public User() {
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }
    public void setUsername(String username) { this.username = username; }

    public String getSurname() {
        return surname;
    }
    public void setSurname(String surname) { this.surname = surname; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getSelectedOption() { return selectedOption;}
    public void setSelectedOption(String selectedOption) {this.selectedOption = selectedOption;}

    public String getFavoriteCat() {
        return favoriteCat;
    }
    public void setFavoriteCat(String favoriteCat) {
        this.favoriteCat = favoriteCat;
    }

    public String getTextarea() {
        return textarea;
    }
    public void setTextarea(String textarea) {
        this.textarea = textarea;
    }

    public String getSendToEmail() {
        return sendToEmail;
    }
    public void setSendToEmail(String sendToEmail) {
        this.sendToEmail = sendToEmail;
    }
}
