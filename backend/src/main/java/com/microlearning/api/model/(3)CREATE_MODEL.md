# How To Create a **Model** 🤖
**Definition**: Models represent the database table structure used in your application. 
Unlike DTO's, they do not automatically filter sensitive data.

<!-- File Start -->

package com.microlearning.api.model;
import jakarta.persistence.*;

<!-- @Entity: This is a Database table-->
@Entity
<!-- @Table: Name of table-->
@Table(name = "NAME_OF_TABLE")
public class NAME_OF_API {

    /*PRIMARY KEY*/
    @Id
    /*@GeneratedValue: Use database method for how ID is determined */
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private VAR_TYPE NAME_OF_PRIMARY_KEY_VAR;

    /*Columns */
    private VAR_TYPE NAME_OF_VAR;
    private VAR_TYPE NAME_OF_VAR;
    private VAR_TYPE NAME_OF_VAR;
    private VAR_TYPE NAME_OF_VAR;
    private VAR_TYPE NAME_OF_VAR;
}
