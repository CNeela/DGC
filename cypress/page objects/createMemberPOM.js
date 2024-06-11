class TeamMember
{

    
    webElements ={
    clickGroupsIcon:()=> cy.get("img[src='assets/img/total.svg']"),
    clickCreateButton:()=>cy.get ( ".btn.btn-top[routerlink='/groups/create-member']"),
    txtTeamMemberName:()=>cy.get ("input[name='name']"),
    txtDesignation:()=>cy.get( "input[name='designation']"),
    setCurrency:()=> cy.get("select[name='currency']"),
    DefaultRate:()=>cy.get("input[name='defaultRate']"),
    txtEmail:()=> cy.get("input[id='exampleInputEmail1']"),
    txtConfirmEmail:()=>cy.get("input[id='exampleInputEmail2']"),
    assignGroupBtn:()=>cy.get(".fa.fa-solid.fa-plus.calimg.calitem.input-group-append.sgroup"),
    saveBtn:() => cy.xpath("//button[@type='submit']"),
    viewChanges:() =>cy.xpath("//button[text()='View Changes']"),  
    searchBox:() => cy.xpath("//input[@placeholder='Search Members']"),
    teamMemberAssert: () => cy.xpath("//tr//td[1]"),
    emailAssertion:()=> cy.xpath("//tr//td[1]"),
    designationAssert:()=> cy.xpath("//tr//td[2]"),
    DepartmentsAssert:()=> cy.xpath("//tr//td[3]"),
    defaultRateAssert:()=> cy.xpath("//tr//td[5]"),
    backBtn:() => cy.xpath("//button[@class='btn btn-default btnsave btnback']"),
    cancelBtn:()=> cy.xpath("//button[@class='btn btn-default btncancel']"),
    YesBtn:()=> cy.xpath("//button[@class='btn btn-default alertbtn alertbtnyes']"),
    NoBtn:()=> cy.xpath("//button[@class='btn btn-default alertbtn alertbtnno']"),
    crossBtn:()=>cy.xpath("//button[@class='btn-close']"),
    headingName:()=> cy.xpath("(//p[@class='thheadname'])[1]"),
    TeamMemberInfoAssertion:()=>cy.xpath("//p[text()='Team Member Info']"),
    errorMsgforName:()=> cy.xpath("//div[contains(text(),'Name is required')]"),
    errorMsgforDesignation:()=> cy.xpath("//div[contains(text(),'Designation is required')]"),
    errorMsgforDefaultRate:()=> cy.xpath("(//div[contains(text(),'Hourly rate is required')])[1]"),
    errorMsgforEmail:()=> cy.xpath("//div[contains(text(),'Email is required')]"),
    errorMsgforConfirmEmail:()=> cy.xpath("//div[contains(text(),'Confirm email is required')]"),
    emailExistInFirm:()=> cy.xpath("//div[@class='invalid-feedback']"),
    confirmEmailMismatchError:()=> cy.xpath("//div[contains(text(),'Confirm email does not match')]"),
    successAlertText:()=> cy.get("div[class='modal-body'] div[class='alertext']"),
    addTeamMembersBtn:()=> cy.xpath("//button[contains(text(),'Add Members')]"),
    closeBtnSuccessPopup:()=> cy.xpath("//div[@class='iconclose']"),


    };
   

    groupsIconClick()
    {
        this.webElements.clickGroupsIcon().click();
    }
    creatMemberBtnClick()
    {
        this.webElements.clickCreateButton().click();
    }
    setTeamMemberName(tmName)
    {
        this.webElements.txtTeamMemberName().type(tmName);
    }
    setDesignation(desingation)
    {
        this.webElements.txtDesignation().type(desingation);
    }
    setCurrencyRate(currencyRate)
    {
        this.webElements.setCurrency().select(currencyRate);
    }
    setDefaultRate(defaultRate)
    {
        this.webElements.DefaultRate().type(defaultRate);
    }
    setEmail(email)
    {
        this.webElements.txtEmail().type(email);
    }
    setConirmEmail(confirmemail)
    {
        this.webElements.txtConfirmEmail().type(confirmemail);
    }  
    clickAssignGroupPlusBtn()
    {
        this.webElements.assignGroupBtn().click();
    }
    SelectDepts(deptSelect) {
        for (let i = 0; i < deptSelect.length; i++) {
          cy.xpath(
            "//div//div[text()='" + deptSelect[i] + "']//following::input[1]"
          ).click();
        }
      }

      clickSaveBtn()
      {
       this.webElements.saveBtn().click({force:true});
      }
      clickViewChangesBtn(){
        this.webElements.viewChanges().click();
      }
      clickSearchBar(tmName){
        this.webElements.searchBox().type(tmName);
      }

      teamMemberAssertion(nameAssert){
       this.webElements.teamMemberAssert().should("contain", nameAssert);
      }
      clickBackBtn(){
        this.webElements.backBtn().click();
      }
      nameAssertion(tmName2){
        this.webElements.txtTeamMemberName().should("have.value", tmName2);
      }
      designationAssertion(designation2){
        this.webElements.txtDesignation().should("have.value", designation2);
      }
      defaultCurrencyAssertion(currencyRate2){
        this.webElements.setCurrency().should("have.value",currencyRate2);
      }
      defaultRateAssertion(defaultRate2){
        this.webElements.DefaultRate().should("have.value",defaultRate2);
      }
      emailAssertion(email2){
        this.webElements.txtEmail().should("have.value",email2);
      }
      confirmEmailAssertion(confirmemail2){
        this.webElements.txtConfirmEmail().should("have.value",confirmemail2);

      }
      clickCancelBtn(){
        this.webElements.cancelBtn().click();
      }
      clickYesOnCancel(){
        this.webElements.YesBtn().click();
      }
      clickNoOnCancel(){
        this.webElements.NoBtn().click();
      }
      clickCrossBtn(){
        this.webElements.crossBtn().click();
      }
      viewPageAssertion(){
        this.webElements.headingName().should('be.visible');
      }
      TeamMemberInfoasset(){
        this.webElements.TeamMemberInfoAssertion().should('be.visible');
      }
      searchBarVisibleAssertion(){
        this.webElements.searchBox().should('be.visible');
      }
      nameErrorMsgAssertion(){
        this.webElements.errorMsgforName().should('be.visible');
      }
      designationErrorMsgAssertion(){
        this.webElements.errorMsgforDesignation().should('be.visible');
      }
      defaultRateErrorMsgAssertion(){
        this.webElements.errorMsgforDefaultRate().should('be.visible');
      }
      emailErrorMsgAssertion(){
        this.webElements.errorMsgforEmail().should('be.visible');
      }
      confirmEmailErrorMsgAssertion(){
        this.webElements.errorMsgforConfirmEmail().should('be.visible');
      }
      emailExistInFirmErrorMsg(){
        this.webElements.emailExistInFirm().should('be.visible');
      }
      emailMismatchErrorMsg(){
        this.webElements.confirmEmailMismatchError().should('be.visible');
      }
      successAlertTextContainsTMName(tmName){
        this.webElements.successAlertText().should("contain", tmName);
      }

      searchBarAssingnTMpage(departmentName){
        this.webElements.searchBox().type(departmentName);
      }
      DepartmentVisible(assertDept){
        cy.xpath(
          "//div//div[text()='" + assertDept + "']").should("contain", assertDept)
      }
      diffDeptNotVisible(givenDepartment, searchDepartment){
        let expDept = givenDepartment;
        cy.xpath(
          "//div//div[text()='" + searchDepartment + "']").then((x)=>{
            let actDept = x.text();
            expect(actDept).to.not.equal(expDept)

          })
      }
      AddMemberBtn(){
        this.webElements.addTeamMembersBtn().click();
      }

      closeBtnInSuccessPopup(){
        this.webElements.closeBtnSuccessPopup().click();
      }

      emailAssertionInViewTMPage(email){
        this.webElements.emailAssertion().should("contain", email);
      }

      designationAssertionInViewTMPage(designation){
        this.webElements.designationAssert().should("contain", designation);
      }

      departmentsAssertionInViewTMPage(Dept){
        this.webElements.DepartmentsAssert().should("contain", Dept);
      }

      DefaultRateAssertionInViewTMPage(defaultRate){
        this.webElements.defaultRateAssert().should("contain", defaultRate);
      }







      
   
} 
///export default TeamMember;
module.exports = new TeamMember();
   
   
   
   
   
   
   
    /* cy.get("img[src='assets/img/total.svg']").click()
        cy.get(".btn.btn-top[routerlink='/groups/create-member']").click()
        cy.get("input[name='name']").type("Ganesa")
        cy.get("input[name='designation']").type("Lawyer")
        cy.get("select[name='currency']").select('IndianRupee(INR)').should('have.value','IndianRupee(INR)')
        cy.get("input[name='defaultRate']").type("1000")
        cy.get("input[id='exampleInputEmail1']").type("ganesa1070@pursip.com")
        cy.get("input[id='exampleInputEmail2']").type("ganesa1070@pursip.com")*/


