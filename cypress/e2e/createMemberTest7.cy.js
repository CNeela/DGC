import Login from"../page objects/login page.js";
import testMembers from"../page objects/createMemberPOM.js";

describe('AccountCreation', ()=>{
  var data; 

  before(() =>{

    cy.visit("http://staging.corp.lauditor.com/login")

      cy.fixture('loginCredentials').then((data1)=>{

      
      Login.setUserName(data1.username)
      Login.setPassword(data1.password)
      Login.clickSubmit();
      Login.verifyLogin();

      cy.fixture('createMemberdata').then((value)=>{
        data = value;


  });

  });
});

// 1. Create Member with assign groups
      it('CreateMemberWtihGroups',()=>{


          var selectDepts = [
            data.selectDepartments.Dept1,
            data.selectDepartments.Dept2,
          ];
          testMembers.groupsIconClick();
          testMembers.creatMemberBtnClick();
          
          cy.wait(2000);
          testMembers.creatMemberBtnClick();
          cy.wait(2000);
          cy.scrollTo('top');
          cy.wait(2000);
          testMembers.setTeamMemberName(data.memberDetails.tmName);
          testMembers.setDesignation(data.memberDetails.designation);
          testMembers.setCurrencyRate(data.memberDetails.currencyRate);
          testMembers.setDefaultRate(data.memberDetails.defaultRate);
          testMembers.setEmail(data.memberDetails.email);
          testMembers.setConirmEmail(data.memberDetails.confirmemail);
          testMembers.clickAssignGroupPlusBtn();
          testMembers.SelectDepts(selectDepts);
          cy.wait(5000);
          testMembers.clickSaveBtn();
          cy.wait(5000);
          testMembers.successAlertTextContainsTMName(data.memberDetails.tmName);
          cy.wait(2000);
          testMembers.clickViewChangesBtn();
          cy.wait(2000);
          //teamMemberCreation.clickSearchBar
          testMembers.teamMemberAssertion(data.memberDetails.nameAssert);
         })
       
        
        
         // 2. Account creation without assigning groups

         it('createMemberWithoutGroups', ()=>{
          
            cy.reload();
            testMembers.groupsIconClick();
            cy.wait(2000);
            testMembers.creatMemberBtnClick();
            cy.wait(2000);
            cy.scrollTo('top');
            cy.wait(2000);
            testMembers.setTeamMemberName(data.memberDetails1.tmName1);
            testMembers.setDesignation(data.memberDetails1.designation1);
            testMembers.setCurrencyRate(data.memberDetails1.currencyRate1);
            testMembers.setDefaultRate(data.memberDetails1.defaultRate1);
            testMembers.setEmail(data.memberDetails1.email1);
            testMembers.setConirmEmail(data.memberDetails1.confirmemail1);
            cy.wait(5000);
            testMembers.clickSaveBtn();
            cy.wait(5000);
            testMembers.successAlertTextContainsTMName(data.memberDetails1.tmName1);
            cy.wait(5000);
            testMembers.clickViewChangesBtn();
            cy.wait(2000);
            testMembers.teamMemberAssertion(data.memberDetails1.nameAssert1);

          })


          //3. While clicking on back, wheather all team member details that were entered before, still they retain or not
          
          it('filledDetailsShouldRetainClickBack', ()=>{

            cy.reload();
            testMembers.groupsIconClick();
            cy.wait(2000);

            testMembers.creatMemberBtnClick();
            cy.wait(2000);
            cy.scrollTo('top');
            cy.wait(2000);
            testMembers.setTeamMemberName(data.memberDetails2.tmName2);
            testMembers.setDesignation(data.memberDetails2.designation2);
            testMembers.setCurrencyRate(data.memberDetails2.currencyRate2);
            testMembers.setDefaultRate(data.memberDetails2.defaultRate2);
            testMembers.setEmail(data.memberDetails2.email2);
            testMembers.setConirmEmail(data.memberDetails2.confirmemail2);
            testMembers.clickAssignGroupPlusBtn();
            cy.scrollTo('bottom')
            testMembers.clickBackBtn();
            cy.wait(1000)
            testMembers.nameAssertion(data.memberDetails2.tmName2);
            cy.wait(1000)
            testMembers.designationAssertion(data.memberDetails2.designation2);
            cy.wait(1000)
            testMembers.defaultCurrencyAssertion(data.memberDetails2.currencyRate2);
            cy.wait(1000)
            testMembers.defaultRateAssertion(data.memberDetails2.defaultRate2);
            cy.wait(1000)
            testMembers.emailAssertion(data.memberDetails2.email2);
            cy.wait(1000)
            testMembers.confirmEmailAssertion(data.memberDetails2.confirmemail2);

          })


          //4. Click on yes in cancel alert, It should navigate to view member page

          it('clickYesInCancelAlert',()=>{
            cy.reload();
            testMembers.groupsIconClick();
            cy.wait(2000);

            testMembers.creatMemberBtnClick();
            cy.wait(2000);
            cy.scrollTo('top');
            cy.wait(2000);
            testMembers.setTeamMemberName(data.memberDetails3.tmName);
            testMembers.setDesignation(data.memberDetails3.designation);
            testMembers.setCurrencyRate(data.memberDetails3.currencyRate);
            testMembers.setDefaultRate(data.memberDetails3.defaultRate);
            testMembers.setEmail(data.memberDetails3.email);
            testMembers.setConirmEmail(data.memberDetails3.confirmemail);
            testMembers.clickCancelBtn();
            testMembers.clickYesOnCancel();
            testMembers.viewPageAssertion();

          })


          //5. click on No in cancel alert, check the control should be in the same page

          it('clickNoInCancelAlert',()=>{
            cy.reload();
            testMembers.groupsIconClick();
            cy.wait(2000);

            testMembers.creatMemberBtnClick();
            cy.wait(2000);
            cy.scrollTo('top');
            cy.wait(2000);
            testMembers.setTeamMemberName(data.memberDetails4.tmName);
            testMembers.setDesignation(data.memberDetails4.designation);
            testMembers.setCurrencyRate(data.memberDetails4.currencyRate);
            testMembers.setDefaultRate(data.memberDetails4.defaultRate);
            testMembers.setEmail(data.memberDetails4.email);
            testMembers.setConirmEmail(data.memberDetails4.confirmemail);
            testMembers.clickCancelBtn();
            testMembers.clickNoOnCancel();
            testMembers.TeamMemberInfoasset();


})
            //6. click on cross button in cancel alert, check the control should be in the same page

          it('clickCrossBtnInCancelAlert',()=>{
            cy.reload();
            testMembers.groupsIconClick();
            cy.wait(2000);

            testMembers.creatMemberBtnClick();
            cy.wait(2000);
            cy.scrollTo('top');
            cy.wait(2000);
            testMembers.setTeamMemberName(data.memberDetails5.tmName);
            testMembers.setDesignation(data.memberDetails5.designation);
            testMembers.setCurrencyRate(data.memberDetails5.currencyRate);
            testMembers.setDefaultRate(data.memberDetails5.defaultRate);
            testMembers.setEmail(data.memberDetails5.email);
            testMembers.setConirmEmail(data.memberDetails5.confirmemail);
            testMembers.clickCancelBtn();
            testMembers.clickCrossBtn();
            testMembers.TeamMemberInfoasset();

})
      //7. While clicking on yes on cancel in Assign to department page, check it navigates to team member page
          
          it('CancelInAssignDepartmentPage', ()=>{

            cy.reload();
            testMembers.groupsIconClick();
            cy.wait(2000);

            testMembers.creatMemberBtnClick();
            cy.wait(2000);
            cy.scrollTo('top');
            cy.wait(2000);
            testMembers.setTeamMemberName(data.memberDetails6.tmName);
            testMembers.setDesignation(data.memberDetails6.designation);
            testMembers.setCurrencyRate(data.memberDetails6.currencyRate);
            testMembers.setDefaultRate(data.memberDetails6.defaultRate);
            testMembers.setEmail(data.memberDetails6.email);
            testMembers.setConirmEmail(data.memberDetails6.confirmemail);
            testMembers.clickAssignGroupPlusBtn();
            cy.scrollTo('bottom')
            testMembers.clickCancelBtn();
            testMembers.clickYesOnCancel();
            cy.wait(2000);
            testMembers.viewPageAssertion();

})
            //8. While clicking on No on cancel in Assign to department page, check the control is in the same page
          
          it('noInCancelInAssignDepartmentPage', ()=>{

            cy.reload();
            testMembers.groupsIconClick();
            cy.wait(2000);

            testMembers.creatMemberBtnClick();
            cy.wait(2000);
            cy.scrollTo('top');
            cy.wait(2000);
            testMembers.setTeamMemberName(data.memberDetails7.tmName);
            testMembers.setDesignation(data.memberDetails7.designation);
            testMembers.setCurrencyRate(data.memberDetails7.currencyRate);
            testMembers.setDefaultRate(data.memberDetails7.defaultRate);
            testMembers.setEmail(data.memberDetails7.email);
            testMembers.setConirmEmail(data.memberDetails7.confirmemail);
            testMembers.clickAssignGroupPlusBtn();
            cy.scrollTo('bottom')
            testMembers.clickCancelBtn();
            testMembers.clickNoOnCancel();
            cy.wait(5000);
            testMembers.searchBarVisibleAssertion();

})

            //9. While clicking on cross button on cancel in Assign to department page, check the control is in the same page
          
          it('crossBtnInCancelInAssignDepartmentPage', ()=>{

            cy.reload();
            testMembers.groupsIconClick();
            cy.wait(2000);

            testMembers.creatMemberBtnClick();
            cy.wait(2000);
            cy.scrollTo('top');
            cy.wait(2000);
            testMembers.setTeamMemberName(data.memberDetails8.tmName);
            testMembers.setDesignation(data.memberDetails8.designation);
            testMembers.setCurrencyRate(data.memberDetails8.currencyRate);
            testMembers.setDefaultRate(data.memberDetails8.defaultRate);
            testMembers.setEmail(data.memberDetails8.email);
            testMembers.setConirmEmail(data.memberDetails8.confirmemail);
            testMembers.clickAssignGroupPlusBtn();
            cy.scrollTo('bottom')
            testMembers.clickCancelBtn();
            testMembers.clickCrossBtn();
            cy.wait(5000);
            testMembers.searchBarVisibleAssertion();

})


           //10. click on save without entering data, check invalid-feedback appear or not

           it('clickSaveWithoutEnteringData', ()=>{

            cy.reload();
            testMembers.groupsIconClick();
            cy.wait(2000);

            testMembers.creatMemberBtnClick();
            cy.wait(2000);
            cy.scrollTo('top');
            cy.wait(2000);
            testMembers.clickSaveBtn();
            testMembers.nameErrorMsgAssertion();
            testMembers.designationErrorMsgAssertion();
            testMembers.defaultRateErrorMsgAssertion();
            testMembers.emailErrorMsgAssertion();
            testMembers.confirmEmailErrorMsgAssertion();


           })


           //11. If email is already exist in this firm, check whether error message appear or not

           it('emailExistInTheFirm',()=>{

            cy.reload();
            testMembers.groupsIconClick();
            cy.wait(2000);

            testMembers.creatMemberBtnClick();
            cy.wait(2000);
            cy.scrollTo('top');
            cy.wait(2000);
            testMembers.setTeamMemberName(data.memberDetails10.tmName);
            testMembers.setDesignation(data.memberDetails10.designation);
            testMembers.setCurrencyRate(data.memberDetails10.currencyRate);
            testMembers.setDefaultRate(data.memberDetails10.defaultRate);
            testMembers.setEmail(data.memberDetails10.email);
            testMembers.setConirmEmail(data.memberDetails10.confirmemail);
            testMembers.clickSaveBtn();
            cy.wait(5000);
            testMembers.emailExistInFirmErrorMsg();
           })


           //12. If email and confirm email is mismatch error will appear.
           it('emailConfirmEmailMismatch', ()=> {
           cy.reload();
            testMembers.groupsIconClick();
            cy.wait(2000);

            testMembers.creatMemberBtnClick();
            cy.wait(2000);
            cy.scrollTo('top');
            cy.wait(2000);
            testMembers.setTeamMemberName(data.memberDetails11.tmName);
            testMembers.setDesignation(data.memberDetails11.designation);
            testMembers.setCurrencyRate(data.memberDetails11.currencyRate);
            testMembers.setDefaultRate(data.memberDetails11.defaultRate);
            testMembers.setEmail(data.memberDetails11.email);
            testMembers.setConirmEmail(data.memberDetails11.confirmemail);
            testMembers.clickSaveBtn();
            testMembers.emailMismatchErrorMsg();
          })



          // 13. check wheather search box is working or not
          it('checkSearchBox',()=>{

            cy.reload();
            testMembers.groupsIconClick();
            cy.wait(2000);

            testMembers.creatMemberBtnClick();
            cy.wait(2000);
            cy.scrollTo('top');
            cy.wait(2000);
            testMembers.setTeamMemberName(data.memberDetails12.tmName);
            testMembers.setDesignation(data.memberDetails12.designation);
            testMembers.setCurrencyRate(data.memberDetails12.currencyRate);
            testMembers.setDefaultRate(data.memberDetails12.defaultRate);
            testMembers.setEmail(data.memberDetails12.email);
            testMembers.setConirmEmail(data.memberDetails12.confirmemail);
            testMembers.clickAssignGroupPlusBtn();
            testMembers.searchBarAssingnTMpage(data.memberDetails12.departmentName);
            cy.wait(5000);
            testMembers.DepartmentVisible(data.memberDetails12.assertDept);

          })

          //14. Clicking on Add Team members button in success popup

          it('addTeamMemberBtn',()=>{

            var selectDepts1 = [
              data.selectDepartments1.Dept1,
              data.selectDepartments1.Dept2,
            ];
            cy.reload();  
            testMembers.groupsIconClick();
            cy.wait(2000);
            testMembers.creatMemberBtnClick();
            cy.wait(2000);
            cy.scrollTo('top');
            cy.wait(2000);
            testMembers.setTeamMemberName(data.memberDetails13.tmName);
            testMembers.setDesignation(data.memberDetails13.designation);
            testMembers.setCurrencyRate(data.memberDetails13.currencyRate);
            testMembers.setDefaultRate(data.memberDetails13.defaultRate);
            testMembers.setEmail(data.memberDetails13.email);
            testMembers.setConirmEmail(data.memberDetails13.confirmemail);
            testMembers.clickAssignGroupPlusBtn();
            cy.wait(5000);
            testMembers.SelectDepts(selectDepts1);
            cy.wait(5000);
            testMembers.clickSaveBtn();
            cy.wait(5000);
            testMembers.successAlertTextContainsTMName(data.memberDetails13.tmName);
            cy.wait(2000);
            testMembers.AddMemberBtn();
            testMembers.TeamMemberInfoasset();
          })

          //15. Check the email and designation after creating a team member

          it('emailDesignationCheck', ()=>{

            cy.reload();  
            testMembers.groupsIconClick();
            cy.wait(2000);
            testMembers.creatMemberBtnClick();
            cy.wait(2000);
            cy.scrollTo('top');
            cy.wait(2000);
            testMembers.setTeamMemberName(data.memberDetails14.tmName);
            testMembers.setDesignation(data.memberDetails14.designation);
            testMembers.setCurrencyRate(data.memberDetails14.currencyRate);
            testMembers.setDefaultRate(data.memberDetails14.defaultRate);
            testMembers.setEmail(data.memberDetails14.email);
            testMembers.setConirmEmail(data.memberDetails14.confirmemail);
            testMembers.clickSaveBtn();
            cy.wait(5000);
            testMembers.clickViewChangesBtn();
            cy.wait(5000);
            testMembers.emailAssertionInViewTMPage(data.memberDetails14.email);
            cy.wait(5000);
            testMembers.designationAssertionInViewTMPage(data.memberDetails14.designation);

          })
           // 16. Check the department and default Rate


          it('departmentsAndDefaultRatecheck', ()=>{

            var selectDepts2 = [
              data.selectDepartments2.Dept1,
              data.selectDepartments2.Dept2,
            ];
            testMembers.groupsIconClick();
            testMembers.creatMemberBtnClick();            
            cy.wait(2000);
            testMembers.creatMemberBtnClick();
            cy.wait(2000);
            cy.scrollTo('top');
            cy.wait(2000);
            testMembers.setTeamMemberName(data.memberDetails15.tmName);
            testMembers.setDesignation(data.memberDetails15.designation);
            testMembers.setCurrencyRate(data.memberDetails15.currencyRate);
            testMembers.setDefaultRate(data.memberDetails15.defaultRate);
            testMembers.setEmail(data.memberDetails15.email);
            testMembers.setConirmEmail(data.memberDetails15.confirmemail);
            testMembers.clickAssignGroupPlusBtn();
            testMembers.SelectDepts(selectDepts2);
            cy.wait(5000);
            testMembers.clickSaveBtn();
            cy.wait(5000);
            testMembers.successAlertTextContainsTMName(data.memberDetails15.tmName);
            cy.wait(2000);
            testMembers.clickViewChangesBtn();
            cy.wait(2000);
            testMembers.departmentsAssertionInViewTMPage(data.memberDetails15.dept1);
            testMembers.departmentsAssertionInViewTMPage(data.memberDetails15.dept2);
            testMembers.DefaultRateAssertionInViewTMPage(data.memberDetails15.defaultRate);

            




          })
          


})




          
         





















/*describe('Create Groups', () => {

    it('create group without team member', () => {
      cy.visit("http://staging.corp.lauditor.com/login")
      cy.title().should('eq','DG Counsel') // title verify
      cy.get('.logomain > img').should('be.visible') // verify logo is visible or not
      .and('exist') //logo is present or not


      cy.get("#id_email").type("corpsuperuser@gmail.com")
      cy.get("#id_email").should('have.value','corpsuperuser@gmail.com') //value check
      cy.get("#id_password").type("Test@123")
      cy.get("#id_password").should('have.value','Test@123')
      cy.get("button[type='submit']").click()

      let expName = "Soundarya SCF SU"

      cy.get("ul[class='menu webmenu'] p[class='custusername']").then( (x) => {

        let actName = x.text()
        expect(actName).to.equal(expName)
        //expect(actName).to.not.equal(expName)

        cy.get("img[src='assets/img/total.svg']").click()
        cy.get(".btn.btn-top[routerlink='/groups/create-member']").click()
        cy.get("input[name='name']").type("Ganesa")
        cy.get("input[name='designation']").type("Lawyer")
        cy.get("select[name='currency']").select('IndianRupee(INR)').should('have.value','IndianRupee(INR)')
        cy.get("input[name='defaultRate']").type("1000")
        cy.get("input[id='exampleInputEmail1']").type("ganesa1070@pursip.com")
        cy.get("input[id='exampleInputEmail2']").type("ganesa1070@pursip.com")






      })

    })
  })
  */