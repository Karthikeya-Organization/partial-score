
const fs = require('fs');
const content = fs.readFileSync('./index.html', 'utf-8');

describe("HTML Assignment Tests", () => {
  test("✅ Task 1: Basic HTML Structure [20 pts]", () => {
    expect(content).toMatch(/<!DOCTYPE html>/i);
    expect(content).toMatch(/<html.*?>/);
    expect(content).toMatch(/<head>.*?<\/head>/s);
    expect(content).toMatch(/<body>.*?<\/body>/s);
  });

  test("✅ Task 2: Profile Section [20 pts]", () => {
    expect(content).toMatch(/<h1>.*?<\/h1>/i);
    expect(content).toMatch(/<p>.*?<\/p>/i);
    expect(content).toMatch(/<img.*?src=.*?>/i);
  });

  test("✅ Task 3: Link to Resource [20 pts]", () => {
    expect(content).toMatch(/<a.*?href=.*?target="_blank".*?>.*?<\/a>/i);
  });

  test("✅ Task 4: Semantic Tags [20 pts]", () => {
    const tags = ['<section>', '<article>', '<footer>', '<header>'];
    const matches = tags.filter(tag => content.toLowerCase().includes(tag));
    expect(matches.length).toBeGreaterThanOrEqual(3);
  });

  test("✅ Task 5: Contact Form [20 pts]", () => {
    expect(content).toMatch(/<form.*?>.*?<\/form>/is);
    expect(content).toMatch(/<input.*?name=.*?>/i);
    expect(content).toMatch(/<textarea.*?><\/textarea>/i);
    expect(content).toMatch(/<button.*?>.*?submit.*?<\/button>/i);
  });
});
