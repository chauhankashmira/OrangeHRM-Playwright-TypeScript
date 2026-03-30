
import { test, expect } from '@playwright/test';
import {
  LoginPage,
  AdminPage,
  PIMPage,
  LeavePage,
  TimePage,
  RecruitmentPage,
  MyInfoPage,
  PerformancePage,
  DashboardPage,
  DirectoryPage,
  MaintenancePage,
  ClaimPage,
  MyActionsPage
} from '../pages';

test.describe('OrangeHRM Automation Tests', () => {
  let loginPage: LoginPage;
  let adminPage: AdminPage;
  let pimPage: PIMPage;
  let leavePage: LeavePage;
  let timePage: TimePage;
  let recruitmentPage: RecruitmentPage;
  let myInfoPage: MyInfoPage;
  let performancePage: PerformancePage;
  let dashboardPage: DashboardPage;
  let directoryPage: DirectoryPage;
  let maintenancePage: MaintenancePage;
  let claimPage: ClaimPage;
  let myActionsPage: MyActionsPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    adminPage = new AdminPage(page);
    pimPage = new PIMPage(page);
    leavePage = new LeavePage(page);
    timePage = new TimePage(page);
    recruitmentPage = new RecruitmentPage(page);
    myInfoPage = new MyInfoPage(page);
    performancePage = new PerformancePage(page);
    dashboardPage = new DashboardPage(page);
    directoryPage = new DirectoryPage(page);
    maintenancePage = new MaintenancePage(page);
    claimPage = new ClaimPage(page);
    myActionsPage = new MyActionsPage(page);

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  test('Login and Dashboard Verification', async ({ page }) => {
    
    // LoginPage actions
    await loginPage.verifyForgotPasswordLink();
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
    await loginPage.loginAsAdmin();

    
    // DashboardPage actions
    await dashboardPage.clickPendingSelfReview();

    
    // MyActionsPage actions
    await myActionsPage.verifySubUnit();
    await myActionsPage.verifySelfEvaluationStatus();
    await myActionsPage.verifyReviewStatus();
    await myActionsPage.clickEvaluateIcon();
    await myActionsPage.verifyPerformanceReviewText();
    await myActionsPage.verifyReviewSummaryText();
    await myActionsPage.verifyReviewStatusActivated();
    await myActionsPage.verifyReviewPeriodAgain();
    await myActionsPage.verifyReviewDueDate();
    await myActionsPage.verifySupervisorEvaluationBy();
    await myActionsPage.verifyStatusEvaluationActivated();
    await myActionsPage.clickCancelButton();
  });

  
  test('Admin Page Verification', async ({ page }) => {
    await loginPage.loginAsAdmin();
    await adminPage.navigateToAdmin();

    await adminPage.verifyUserManagementDropdown();
    await adminPage.verifyJobDropdown();
    await adminPage.verifyOrganizationDropdown();
    await adminPage.verifyQualificationsDropdown();
  });

  
  test('PIM Page Verification', async ({ page }) => {
    await loginPage.loginAsAdmin();
    await pimPage.navigateToPIM();

    await pimPage.verifyConfigurationDropdown();
  });

  
  test('Leave Page Verification', async ({ page }) => {
    await loginPage.loginAsAdmin();
    await leavePage.navigateToLeave();

    await leavePage.verifyEntitlementsDropdown();
    await leavePage.verifyConfigureDropdown();
  });

  
  test('Time Page Verification', async ({ page }) => {
    await loginPage.loginAsAdmin();
    await timePage.navigateToTime();

    await timePage.verifyTimesheetsDropdown();
    await timePage.verifyAttendanceDropdown();
    await timePage.verifyReportsDropdown();
    await timePage.verifyProjectInfoDropdown();
  });

  
  test('Recruitment Page Verification', async ({ page }) => {
    await loginPage.loginAsAdmin();
    await recruitmentPage.navigateToRecruitment();

  });

  
  test('My Info Page Verification', async ({ page }) => {
    await loginPage.loginAsAdmin();
    await myInfoPage.navigateToMyInfo();

    await myInfoPage.verifyTextContains();
  });

  
  test('Performance Page Verification', async ({ page }) => {
    await loginPage.loginAsAdmin();
    await performancePage.navigateToPerformance();

    await performancePage.verifyManageReviewsDropdown();
  });

  
  test('Directory Page Verification', async ({ page }) => {
    await loginPage.loginAsAdmin();
    await directoryPage.navigateToDirectory();

    
  });

  
  test('Maintenance Page Verification', async ({ page }) => {
    await loginPage.loginAsAdmin();
    await maintenancePage.navigateToMaintenance();

   });

  
  test('Claim Page Verification', async ({ page }) => {
    await loginPage.loginAsAdmin();
    await claimPage.navigateToClaim();

    await claimPage.verifyConfigurationDropdown();
   
  });
});
