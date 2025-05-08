package vn.minhtri.jobhunter.domain.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReqForgotPass {
    private String email;
    private long code;
}