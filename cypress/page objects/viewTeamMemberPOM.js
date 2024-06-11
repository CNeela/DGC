class viewTeamMember{

    webElements= {
        clickGroupsIcon:()=> cy.get( "img[src='assets/img/total.svg']"),
        viewTeamMembersBtn:()=> cy.xpath("//button[@routerlink='/groups/view-member']"),
        searchBar:()=> cy.xpath("//input[@placeholder='Search Member']"),
        actionBtn:()=>cy.xpath("//button[@data-bs-toggle='dropdown']",),
        editMemberInfo:()=>cy.xpath("//ul[@class='dropdown-menu custom-dropdown show'] //li[1]"),
        nameEditMemberInfo:()=> cy.xpath("//input[@name='name']"),
        designationEditMemberInfo:()=> cy.xpath("//input[@name='designation']"),
        currencyEditMemberInfo:()=>cy.xpath("//select[@name='currency']"),
        defaultRateEditMemberInfo:()=>cy.xpath("//input[@name='defaultRate']"),
        emailEditMemberInfo:()=>cy.xpath("//input[@name='email']"),
        confirmEmailEditMemberInfo:()=>cy.xpath("//input[@name='emailConfirm']"),
        saveBtn:()=> cy.xpath("//button[@type='submit']"),
        cancelBtn:()=> cy.xpath("//button[@type='reset']"),
        crossBtnEditMemberInfo:()=>cy.xpath("//button[@class='btn-close pull-right']"),
        teamMemberAssert: () => cy.xpath("//tr//td[1]"),
        emailAssertion:()=> cy.xpath("//tr//td[1]"),
        designationAssert:()=> cy.xpath("//tr//td[2]"),
        DepartmentsAssert:()=> cy.xpath("//tr//td[3]"),
        defaultRateAssert:()=> cy.xpath("//tr//td[5]"),
        validEmailErrorMsg:()=>cy.xpath("//div[contains(text(),'Email must be a valid email address.')]"),
        confirmEmailMismatchError:()=> cy.xpath("//div[contains(text(),'Confirm email does not match')]"),
        nameRequiredError:()=> cy.xpath("//div[contains(text(),'Name is required')]"),
        designationRequiredError:()=>cy.xpath("//div[contains(text(),'Designation is required')]"),
        emailRequiredError:()=>cy.xpath("//div[contains(text(),'Email is required')]"),
        defaultRateRequiredError:()=>cy.xpath("//div[contains(text(),'Hourly rate is required')]"),
        headingName:()=> cy.xpath("(//p[@class='thheadname'])[1]"),
        updateDepartmentAccess:()=> cy.xpath("//ul[@class='dropdown-menu custom-dropdown show'] //li[2]"),
        saveBtnUpdateDepartAccess:()=> cy.xpath("//button[@class='btn btn-default btnsave']"),
        DepartmentsAssert:()=> cy.xpath("//tr//td[3]"),
        cancelBtnInUpdateDeptAccess:()=>cy.xpath("//button[@class='btn btn-default btncancel']"),
        resetPassword:()=>cy.xpath("//ul[@class='dropdown-menu custom-dropdown show'] //li[3]"),
        resetPasswordWithYes:()=>cy.xpath("//button[@class='btn btn-default alertbtn alertbtnyes']"),
        resetPasswordWithNo:()=> cy.xpath("//button[@class='btn btn-default alertbtn alertbtnno']"),
        crossBtnInResetPasswordPopup:()=>cy.xpath("(//button[@aria-label='Close'])[4]"),
        deleteMember:()=>cy.xpath("//ul[@class='dropdown-menu custom-dropdown show'] //li[4]"),
        deleteWithYes:()=>cy.xpath("//div[@id='exampleModaldelete']//button[@aria-label='Close'][normalize-space()='Yes']"),
        deleteWithNo:()=> cy.xpath("//div[@id='exampleModaldelete']//button[@aria-label='Close'][normalize-space()='No']"),
        deleteWithCrossBtn:()=> cy.xpath("(//button[@aria-label='Close'])[1]"),

        





    };

    groupsIconClick()
    {
        this.webElements.clickGroupsIcon().click();
    }
    viewTeamMemberTabClick(){
        this.webElements.viewTeamMembersBtn().click();
    }
    actionBtnClick(){
        this.webElements.actionBtn().click();
    }
    searchBarViewTM(tmName){
        this.webElements.searchBar().clear();
        this.webElements.searchBar().type(tmName);
    }
    editMemberInfoClick(){
        this.webElements.editMemberInfo().click();
    }
    editName(nameEdit){
        this.webElements.nameEditMemberInfo().clear();
        this.webElements.nameEditMemberInfo().type(nameEdit);
    }
    editDesignation(designationEdit){
        this.webElements.designationEditMemberInfo().clear();
        this.webElements.designationEditMemberInfo().type(designationEdit);
    }
    editCurrency(currencyedit){
        this.webElements.currencyEditMemberInfo().select(currencyedit);
    }
    editDefaultRate(rateEdit){
        this.webElements.defaultRateEditMemberInfo().clear();
        this.webElements.defaultRateEditMemberInfo().type(rateEdit);
    }
    editEmail(emailEdit){
        this.webElements.emailEditMemberInfo().clear();
        this.webElements.emailEditMemberInfo().type(emailEdit);
    }
    editConfirmEmail(confirmEmailEdit){
        this.webElements.confirmEmailEditMemberInfo().clear();
        this.webElements.confirmEmailEditMemberInfo().type(confirmEmailEdit);
    }
    saveBtnEditMemberInfo(){
        this.webElements.saveBtn().click();

    }
    cancelBtnEditMemberInfo(){
        this.webElements.cancelBtn().click();
    }
    teamMemberAssertion(nameAssert){
        this.webElements.teamMemberAssert().should("contain", nameAssert);
     }
    emailAssertionInViewTMPage(emailAssert){
        this.webElements.emailAssertion().should("contain", emailAssert);
      }

      designationAssertionInViewTMPage(designationAssert){
        this.webElements.designationAssert().should("contain", designationAssert);
      }  
    DefaultRateAssertionInViewTMPage(defaultRateAssert){
        this.webElements.defaultRateAssert().should("contain", defaultRateAssert);
      } 
    defaultCurrencyAssertionEditMemberInfo(editdefaultCurrency){
        this.webElements.currencyEditMemberInfo().should("have.value", editdefaultCurrency);
      }
    crossBtnEditMemberInfoClick(){
        this.webElements.crossBtnEditMemberInfo().click();
    }
    validErrorMsgAssert(){
        this.webElements.validEmailErrorMsg().should('be.visible');
    }
    emailMismatchErrorAssert(){
        this.webElements.confirmEmailMismatchError().should('be.visible');
    }
    clearNameText(){
        this.webElements.nameEditMemberInfo().clear();
    }
    nameRequiredErrorAppear(){
        this.webElements.nameRequiredError().should('be.visible');

    }
    cleardesignation(){
        this.webElements.designationEditMemberInfo().clear();        

    }
    designationRequiredErrorMsg(){
        this.webElements.designationRequiredError().should('be.visible');
    }
    clearEmail(){
        this.webElements.emailEditMemberInfo().clear();
    }
    emailRequiredErrorMsg(){
        this.webElements.emailRequiredError().should('be.visible');
    }
    clearDefaultRate(){
        this.webElements.defaultRateEditMemberInfo().clear();
    }
    defaultRateRequiredErrorMsg(){
        this.webElements.defaultRateRequiredError().should('be.visible');

    }
    viewPageAssertion(){
        this.webElements.headingName().should('be.visible');
      }

      SelectDepts(deptSelect) {
        for (let i = 0; i < deptSelect.length; i++) {
          cy.xpath(
            "//div//div[text()='" + deptSelect[i] + "']//following::input[1]"
          ).check();
        }
      }

      unSelectDepts(unSelectdept) {
        for (let i = 0; i < unSelectdept.length; i++) {
          cy.xpath(
            "//div//div[text()='" + unSelectdept[i] + "']//following::input[1]"
          ).uncheck();
        }
      }

      updateDepartmentAccessClick(){
        this.webElements.updateDepartmentAccess().click();
      }

      saveBtnUpdateDepartClick(){
        this.webElements.saveBtnUpdateDepartAccess().click();
      }
      cancelBtnUpdateDeptAccess(){
        this.webElements.cancelBtnInUpdateDeptAccess().click();
      }
      departmentsAssertionInViewTMPage(Dept){
        this.webElements.DepartmentsAssert().should("contain", Dept);
      }
      unselectDeptAssertionInViewTMPage(Dept){
        this.webElements.DepartmentsAssert().should("not.contain", Dept)

      }
      resetPasswordClick(){
        this.webElements.resetPassword().click();
      }
      resetPasswordWithYesClick(){
        this.webElements.resetPasswordWithYes().click();
      }
      resetPasswordWithNoClick(){
        this.webElements.resetPasswordWithNo().click();
      }
      crossBtnClickInRestPassword(){
        this.webElements.crossBtnInResetPasswordPopup().click();
      }
      deleteMemberOptionClick(){
        this.webElements.deleteMember().click();
      }
      deleteMemberWithYesClick(){
        this.webElements.deleteWithYes().click();
      }
      deleteWithNoClick(){
        this.webElements.deleteWithNo().click()
      }
      deleteWithCrossBtnClick(){
        this.webElements.deleteWithCrossBtn().click();
      }







    

}

module.exports = new viewTeamMember();