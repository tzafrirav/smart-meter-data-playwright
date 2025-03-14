import { test } from '@playwright/test';
import { LoginPage } from '../../pages/Login';
import { ProductsPage } from '../../pages/Products';

test.describe('Products', () => {
    test('Add and remove products from cart', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const productsPage = new ProductsPage(page);

        await loginPage.open();
        await loginPage.assertPageOpen();
        await loginPage.enterUsername('standard_user');
        await loginPage.enterPassword('secret_sauce');
        await loginPage.pressLoginButton();
        await loginPage.assertLoginSuccess();
        await productsPage.assertProductsCount(6);
        await productsPage.clickAddToCartButton(0);
        await productsPage.assertPriceBarButtonText(0, "Remove");
        await productsPage.clickRemoveButton(0);
        await productsPage.assertPriceBarButtonText(0, "Add to cart");
    });
});