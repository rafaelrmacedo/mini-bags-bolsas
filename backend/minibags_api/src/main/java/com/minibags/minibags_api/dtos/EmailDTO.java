package com.minibags.minibags_api.dtos;


import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class EmailDTO {
    
    @NotBlank
    @Email
    private String emailFrom;
    @NotBlank
    @Email
    private String emailTo;
    @NotBlank
    private String subject;
    @NotBlank
    private String text;
}
