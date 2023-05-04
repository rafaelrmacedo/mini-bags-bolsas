package com.minibags.minibags_api.models;

import lombok.Data;

@Data
public class EmailModel {
    
    private String emailFrom;
    private String emailTo;
    private String subject;
    private String text;

}
