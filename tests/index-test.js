import { Selector } from 'testcafe';

fixture `Check login`
    .page `http://localhost:9090/index.html`;

test('Check login success', async t => {
    await t
        .typeText('#username', 'hang')
        .typeText('#pass', '123456')
        .click('#submit')
        .expect(Selector('#notice').innerText).eql('Login successfully');
});

test('Check login failure', async t => {
    await t
        .typeText('#username', 'nga')
        .typeText('#pass', '123456')
        .click('#submit')
        .expect(Selector('#notice').innerText).eql('This user is not recognized');
});
