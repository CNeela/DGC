import Login from"../page objects/login page.js";
import viewTeamMember from"../page objects/viewTeamMemberPOM.js";

describe('editMemberInfo', ()=>{
  var data; 

  before(() =>{

    cy.visit("http://staging.corp.lauditor.com/login")

    cy.fixture('loginCredentials').then((data1)=>{

      
      Login.setUserName(data1.username)
      Login.setPassword(data1.password)
      Login.clickSubmit();
      Login.verifyLogin();

      cy.fixture('viewMemberdata').then((value)=>{
        data = value;


  });

  });
});

      // 1. Edit the Member name only
       it('editMemberName',()=>{

        viewTeamMember.groupsIconClick();
        viewTeamMember.viewTeamMemberTabClick();
        viewTeamMember.searchBarViewTM(data.memberDetails.tmName);
        viewTeamMember.actionBtnClick();
        cy.wait(2000);
        viewTeamMember.editMemberInfoClick();
        viewTeamMember.editName(data.memberDetails.changeName);
        //viewTeamMember.editDesignation(data.memberDetails.changeDesignation);
        viewTeamMember.saveBtnEditMemberInfo();
        viewTeamMember.crossBtnEditMemberInfoClick();
        viewTeamMember.teamMemberAssertion(data.memberDetails.nameAssert);

       })

       //2. Edit the Designation only

       it('editMemberDesignation',()=>{

        viewTeamMember.groupsIconClick();
        viewTeamMember.viewTeamMemberTabClick();
        viewTeamMember.searchBarViewTM(data.memberDetails1.tmName);
        viewTeamMember.actionBtnClick();
        cy.wait(2000);
        viewTeamMember.editMemberInfoClick();
        viewTeamMember.editDesignation(data.memberDetails1.changeDesignation);
        viewTeamMember.saveBtnEditMemberInfo();
        viewTeamMember.crossBtnEditMemberInfoClick();
        viewTeamMember.designationAssertionInViewTMPage(data.memberDetails1.changeDesignation);
       

       })

       // 3. edit the email and confirm email

       it('editMemberEmail',()=>{

        viewTeamMember.groupsIconClick();
        viewTeamMember.viewTeamMemberTabClick();
        viewTeamMember.searchBarViewTM(data.memberDetails2.tmName);
        viewTeamMember.actionBtnClick();
        cy.wait(2000);
        viewTeamMember.editMemberInfoClick();
        viewTeamMember.editEmail(data.memberDetails2.changeEmail);
        viewTeamMember.editConfirmEmail(data.memberDetails2.changeConfirmEmail);
        viewTeamMember.saveBtnEditMemberInfo();
        viewTeamMember.crossBtnEditMemberInfoClick();
        viewTeamMember.emailAssertionInViewTMPage(data.memberDetails2.changeEmail);
       
       })

       // 4. Edit the default Rate

       it('editDefaultRate',()=>{

        viewTeamMember.groupsIconClick();
        viewTeamMember.viewTeamMemberTabClick();
        viewTeamMember.searchBarViewTM(data.memberDetails3.tmName);
        viewTeamMember.actionBtnClick();
        cy.wait(2000);
        viewTeamMember.editMemberInfoClick();
        viewTeamMember.editDefaultRate(data.memberDetails3.defaultRate);
        viewTeamMember.saveBtnEditMemberInfo();
        viewTeamMember.crossBtnEditMemberInfoClick();
        cy.wait(2000);
        viewTeamMember.DefaultRateAssertionInViewTMPage(data.memberDetails3.defaultRate);

       
       })

       // 5. enter the valid email id


       it('validEmailErrorMsg',()=>{

        viewTeamMember.groupsIconClick();
        viewTeamMember.viewTeamMemberTabClick();
        viewTeamMember.searchBarViewTM(data.memberDetails4.tmName);
        viewTeamMember.actionBtnClick();
        cy.wait(2000);
        viewTeamMember.editMemberInfoClick();
        viewTeamMember.editEmail(data.memberDetails4.changeEmail);
        viewTeamMember.saveBtnEditMemberInfo();
        viewTeamMember.validErrorMsgAssert();

        
       
       })
       // 6. email and confirm email mismatch error

       it('emailMismatchError',()=>{

        viewTeamMember.groupsIconClick();
        viewTeamMember.viewTeamMemberTabClick();
        viewTeamMember.searchBarViewTM(data.memberDetails4.tmName);
        cy.wait(2000);
        viewTeamMember.actionBtnClick();
        cy.wait(2000);
        viewTeamMember.editMemberInfoClick();
        viewTeamMember.editEmail(data.memberDetails4.changeEmail);
        viewTeamMember.saveBtnEditMemberInfo();
        viewTeamMember.emailMismatchErrorAssert();

        
       })

       //7. Edit the default currency

       it('editDefaultCurrency',()=>{
        cy.reload();
        viewTeamMember.groupsIconClick();
        viewTeamMember.viewTeamMemberTabClick();
        viewTeamMember.searchBarViewTM(data.memberDetails5.tmName);
        viewTeamMember.actionBtnClick();
        cy.wait(2000);
        viewTeamMember.editMemberInfoClick();
        viewTeamMember.editCurrency(data.memberDetails5.defaultCurrency);
        viewTeamMember.saveBtnEditMemberInfo();
        viewTeamMember.crossBtnEditMemberInfoClick();
        cy.wait(2000);
        viewTeamMember.searchBarViewTM(data.memberDetails5.tmName);
        viewTeamMember.actionBtnClick();
        cy.wait(2000);
        viewTeamMember.editMemberInfoClick();
        viewTeamMember.defaultCurrencyAssertionEditMemberInfo(data.memberDetails5.defaultCurrency);
 
       })

       

       // 8. without filling name, name is required message appears

       it('nameRequiredErrorAppear',()=>{
        cy.reload();
        viewTeamMember.groupsIconClick();
        viewTeamMember.viewTeamMemberTabClick();
        viewTeamMember.searchBarViewTM(data.memberDetails6.tmName);
        viewTeamMember.actionBtnClick();
        cy.wait(2000);
        viewTeamMember.editMemberInfoClick();
        viewTeamMember.clearNameText();
        viewTeamMember.saveBtnEditMemberInfo();
        viewTeamMember.nameRequiredErrorAppear();
        


      

         })

         // 9. without filling designation, designation is required message appears

         it('designaionRequiredErrorAppear',()=>{
          cy.reload();
          viewTeamMember.groupsIconClick();
          viewTeamMember.viewTeamMemberTabClick();
          viewTeamMember.searchBarViewTM(data.memberDetails7.tmName);
          viewTeamMember.actionBtnClick();
          cy.wait(2000);
          viewTeamMember.editMemberInfoClick();
          viewTeamMember.cleardesignation();
          viewTeamMember.saveBtnEditMemberInfo();
          viewTeamMember.designationRequiredErrorMsg();
          
        })

        // 10. without filling email, email is required message appears
        it('emailRequiredErrorAppear',()=>{
          cy.reload();
          viewTeamMember.groupsIconClick();
          viewTeamMember.viewTeamMemberTabClick();
          viewTeamMember.searchBarViewTM(data.memberDetails8.tmName);
          viewTeamMember.actionBtnClick();
          cy.wait(2000);
          viewTeamMember.editMemberInfoClick();
          viewTeamMember.clearEmail();
          viewTeamMember.saveBtnEditMemberInfo();
          viewTeamMember.emailRequiredErrorMsg();
          
        })

        // 11. without filling default rate, default rate is required message appears

        it('defaultRateRequiredErrorAppear',()=>{
          cy.reload();
          viewTeamMember.groupsIconClick();
          viewTeamMember.viewTeamMemberTabClick();
          viewTeamMember.searchBarViewTM(data.memberDetails9.tmName);
          viewTeamMember.actionBtnClick();
          cy.wait(2000);
          viewTeamMember.editMemberInfoClick();
          viewTeamMember.clearDefaultRate();
          viewTeamMember.saveBtnEditMemberInfo();
          viewTeamMember.defaultRateRequiredErrorMsg();
          
        })

        // 12. Clicking on cancel in Edit member Info, It navigates to view team member page

        it('clickOnCancelInEditMemberInfo',()=>{
          cy.reload();
          viewTeamMember.groupsIconClick();
          viewTeamMember.viewTeamMemberTabClick();
          viewTeamMember.searchBarViewTM(data.memberDetails10.tmName);
          viewTeamMember.actionBtnClick();
          cy.wait(2000);
          viewTeamMember.editMemberInfoClick();
          viewTeamMember.cancelBtnEditMemberInfo();
          viewTeamMember.viewPageAssertion();
        })

        // 13. enter an existing email id in edit member Info

        it('editMemberEmail',()=>{

          viewTeamMember.groupsIconClick();
          viewTeamMember.viewTeamMemberTabClick();
          viewTeamMember.searchBarViewTM(data.memberDetails2.tmName);
          viewTeamMember.actionBtnClick();
          cy.wait(2000);
          viewTeamMember.editMemberInfoClick();
          viewTeamMember.editEmail(data.memberDetails15.changeEmail);
          viewTeamMember.editConfirmEmail(data.memberDetails15.changeConfirmEmail);
          viewTeamMember.saveBtnEditMemberInfo();
          viewTeamMember.crossBtnEditMemberInfoClick();
          viewTeamMember.viewPageAssertion();
          viewTeamMember.saveBtnEditMemberInfo();
         
         })

        //14. Clicking on save on update Department Access - select new Departments
        it('afterSelectingDepartAndSave', ()=>{

          var selectDepts = [
            data.selectDepartments.Dept1,
            data.selectDepartments.Dept2,
          ];

          cy.reload();
          viewTeamMember.groupsIconClick();
          viewTeamMember.viewTeamMemberTabClick();
          viewTeamMember.searchBarViewTM(data.memberDetails11.tmName);
          viewTeamMember.actionBtnClick();
          cy.wait(2000);
          viewTeamMember.updateDepartmentAccessClick();
          cy.wait(2000);
          viewTeamMember.SelectDepts(selectDepts);
          viewTeamMember.saveBtnUpdateDepartClick();
          viewTeamMember.departmentsAssertionInViewTMPage(data.memberDetails11.Department1);
          viewTeamMember.departmentsAssertionInViewTMPage(data.memberDetails11.Department2);


        })

        //15. unselect department and click on save

        it('afterUnselectingDepartmentAndSave', ()=>{

          var unSelectDepts = [
            data.unSelectDepartments.Dept1,
            data.unSelectDepartments.Dept2,
          ];

          cy.reload();
          viewTeamMember.groupsIconClick();
          viewTeamMember.viewTeamMemberTabClick();
          viewTeamMember.searchBarViewTM(data.memberDetails12.tmName);
          viewTeamMember.actionBtnClick();
          cy.wait(2000);
          viewTeamMember.updateDepartmentAccessClick();
          cy.wait(2000);
          viewTeamMember.unSelectDepts(unSelectDepts);
          viewTeamMember.saveBtnUpdateDepartClick();
          viewTeamMember.unselectDeptAssertionInViewTMPage(data.memberDetails12.Department1);
          viewTeamMember.unselectDeptAssertionInViewTMPage(data.memberDetails12.Department2);
        })


        // 16. click on cancel, after selecting department

        it('afterSelectingDepartAndSave', ()=>{

          var selectDepts = [
            data.selectDepartments1.Dept1,
            data.selectDepartments1.Dept2,
          ];

          cy.reload();
          viewTeamMember.groupsIconClick();
          viewTeamMember.viewTeamMemberTabClick();
          viewTeamMember.searchBarViewTM(data.memberDetails13.tmName);
          viewTeamMember.actionBtnClick();
          cy.wait(2000);
          viewTeamMember.updateDepartmentAccessClick();
          cy.wait(2000);
          viewTeamMember.SelectDepts(selectDepts);
          viewTeamMember.cancelBtnUpdateDeptAccess();
          viewTeamMember.unselectDeptAssertionInViewTMPage(data.memberDetails13.Department1);
          viewTeamMember.unselectDeptAssertionInViewTMPage(data.memberDetails13.Department2);

        })


        //17. Without seleting department click on cancel

        it('afterSelectingDepartAndSave', ()=>{

        cy.reload();
          viewTeamMember.groupsIconClick();
          viewTeamMember.viewTeamMemberTabClick();
          viewTeamMember.searchBarViewTM(data.memberDetails14.tmName);
          viewTeamMember.actionBtnClick();
          cy.wait(2000);
          viewTeamMember.updateDepartmentAccessClick();
          cy.wait(2000);
          viewTeamMember.cancelBtnUpdateDeptAccess();
          viewTeamMember.viewPageAssertion();


        })
        
        // 18. Reset Password with No
        it('resetPasswordWithNo', ()=>{

          cy.reload();
            viewTeamMember.groupsIconClick();
            viewTeamMember.viewTeamMemberTabClick();
            viewTeamMember.searchBarViewTM(data.memberDetails16.tmName);
            viewTeamMember.actionBtnClick();
            cy.wait(2000);
            viewTeamMember.resetPasswordClick();
            viewTeamMember.resetPasswordWithNoClick();
            viewTeamMember.viewPageAssertion();

        })

        // 19.Reset Password with Yes
        it('resetPasswordWithYes', ()=>{

          cy.reload();
            viewTeamMember.groupsIconClick();
            viewTeamMember.viewTeamMemberTabClick();
            viewTeamMember.searchBarViewTM(data.memberDetails17.tmName);
            viewTeamMember.actionBtnClick();
            cy.wait(2000);
            viewTeamMember.resetPasswordClick();
            viewTeamMember.resetPasswordWithYesClick();
            viewTeamMember.viewPageAssertion();

        })


        //20.  Reset Password with cross button
        it('resetPasswordWithCross', ()=>{

          cy.reload();
            viewTeamMember.groupsIconClick();
            viewTeamMember.viewTeamMemberTabClick();
            viewTeamMember.searchBarViewTM(data.memberDetails18.tmName);
            viewTeamMember.actionBtnClick();
            cy.wait(2000);
            viewTeamMember.resetPasswordClick();
            viewTeamMember.crossBtnClickInRestPassword();
            viewTeamMember.viewPageAssertion();


      })

      // 21. delete Member with No
      it.only('deleteMemberWithNo', ()=>{

        cy.reload();
          viewTeamMember.groupsIconClick();
          viewTeamMember.viewTeamMemberTabClick();
          viewTeamMember.searchBarViewTM(data.memberDetails19.tmName);
          viewTeamMember.actionBtnClick();
          cy.wait(5000);
          viewTeamMember.deleteMemberOptionClick();
          viewTeamMember.deleteWithNoClick();
          viewTeamMember.viewPageAssertion();

      })

      // 22. delete Member with cross button
      it.only('deleteWithCross', ()=>{

        cy.reload();
          viewTeamMember.groupsIconClick();
          viewTeamMember.viewTeamMemberTabClick();
          viewTeamMember.searchBarViewTM(data.memberDetails20.tmName);
          viewTeamMember.actionBtnClick();
          cy.wait(5000);
          viewTeamMember.deleteMemberOptionClick();
          viewTeamMember.deleteWithCrossBtnClick();
          viewTeamMember.viewPageAssertion();

    })

      // 23. Delete Member with Yes
      it.only('deleteMemberWithYes', ()=>{

        cy.reload();
          viewTeamMember.groupsIconClick();
          viewTeamMember.viewTeamMemberTabClick();
          viewTeamMember.searchBarViewTM(data.memberDetails21.tmName);
          viewTeamMember.actionBtnClick();
          cy.wait(5000);
          viewTeamMember.deleteMemberOptionClick();
          viewTeamMember.deleteMemberWithYesClick();
          viewTeamMember.viewPageAssertion();

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