import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000public')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)

    await driver.sleep(4000)
})

test('Draw button displays div ID choices', async () => {
    const addToDuo = await driver.findElement(By.id('see-all')).click()
    await driver.sleep(4000)
    const playerDuo = await driver.findElement(By.id('all-bots'))
    const displayed =  await playerDuo.isDisplayed()
    expect(displayed).toBe(true)

    await driver.sleep(4000)
})

test('Adding Duo button display div with ID player-duo', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.className('bot-btn')).click()
    const displayed = await driver.findElement(By.id('player-duo')).isDisplayed()
    expect(displayed).toBe(true)

})