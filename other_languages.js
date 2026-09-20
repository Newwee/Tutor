/**
 * ==========================================================================
 * TUTORCODE PLATFORM - OTHER LANGUAGES MODULE (other_languages.js)
 * Curriculum and Challenges for C, C++, C#, Lua, Java, CSS
 * ==========================================================================
 */
const OtherLanguagesData = {
  lessons: [
    // --- C LANGUAGE LESSONS (3 Lessons) ---
    {
      id: 'c-1',
      lang: 'c',
      chapter: 1,
      title: 'บทที่ 1: C Structure & Hello World',
      subtitle: 'โครงสร้างพื้นฐานภาษา C และฟังก์ชัน main()',
      xpReward: 50,
      explanation: `
        <p>ภาษา C เป็นรากฐานของวิทยาการคอมพิวเตอร์ โปรแกรม C ทุกตัวจะต้องเริ่มต้นที่ฟังก์ชัน <code>main()</code> และรวม Header File เช่น <code>#include &lt;stdio.h&gt;</code> สำหรับฟังก์ชัน Input/Output</p>
      `,
      exampleCode: `#include <stdio.h>

int main() {
    printf("Hello from C Language!\\n");
    return 0;
}`,
      starterCode: `#include <stdio.h>

int main() {
    printf("Hello C World!\\n");
    return 0;
}
`,
      practiceTask: `ใช้ฟังก์ชัน <code>printf()</code> แสดงผลข้อความ <code>Hello C World!</code>`,
      expectedOutput: 'Hello C World!',
      validator: (output) => output.trim().includes('Hello C World!')
    },
    {
      id: 'c-2',
      lang: 'c',
      chapter: 2,
      title: 'บทที่ 2: Variables & Format Specifiers',
      subtitle: 'ตัวแปร int, float และการจัดรูปแบบ %d, %f',
      xpReward: 60,
      explanation: `
        <p>ในภาษา C เราต้องระบุประเภทตัวแปรอย่างชัดเจน เช่น <code>int age = 25;</code> และเมื่อพิมพ์ค่าออกทางหน้าจอต้องใช้ Format Specifier เช่น <code>%d</code> สำหรับ int หรือ <code>%f</code> สำหรับ float</p>
      `,
      exampleCode: `#include <stdio.h>

int main() {
    int score = 100;
    printf("Your score is %d points\\n", score);
    return 0;
}`,
      starterCode: `#include <stdio.h>

int main() {
    int points = 50;
    printf("Points: %d\\n", points);
    return 0;
}
`,
      practiceTask: `ประกาศตัวแปร <code>int points = 50;</code> และแสดงผลข้อความ <code>Points: 50</code>`,
      expectedOutput: 'Points: 50',
      validator: (output) => output.trim().includes('Points: 50')
    },
    {
      id: 'c-3',
      lang: 'c',
      chapter: 3,
      title: 'บทที่ 3: Conditionals in C',
      subtitle: 'การควบคุมเงื่อนไข if / else',
      xpReward: 70,
      explanation: `
        <p>การเขียนเงื่อนไขในภาษา C ใช้วงเล็บ <code>( )</code> ครอบเงื่อนไข และใช้ปีกกา <code>{ }</code> ครอบบล็อกคำสั่งที่ต้องการให้ทำงานเมื่อเงื่อนไขเป็นจริง</p>
      `,
      exampleCode: `#include <stdio.h>

int main() {
    int health = 80;
    if (health > 50) {
        printf("Healthy!\\n");
    } else {
        printf("Danger!\\n");
    }
    return 0;
}`,
      starterCode: `#include <stdio.h>

int main() {
    int health = 80;
    if (health > 50) {
        printf("Healthy!\\n");
    }
    return 0;
}
`,
      practiceTask: `เขียนเงื่อนไขตรวจสอบว่า health > 50 หรือไม่ แล้วแสดงผล <code>Healthy!</code>`,
      expectedOutput: 'Healthy!',
      validator: (output) => output.trim().includes('Healthy!')
    },

    // --- C++ LESSONS (3 Lessons) ---
    {
      id: 'cpp-1',
      lang: 'cpp',
      chapter: 1,
      title: 'บทที่ 1: C++ I/O Streams',
      subtitle: 'การใช้ std::cout และ std::cin',
      xpReward: 50,
      explanation: `
        <p>ภาษา C++ พัฒนาต่อยอดจาก C ด้วยระบบ Object-Oriented และ Stream I/O ผ่าน <code>#include &lt;iostream&gt;</code> โดยใช้ <code>std::cout &lt;&lt;</code> เพื่อแสดงผลข้อมูล</p>
      `,
      exampleCode: `#include <iostream>

int main() {
    std::cout << "Welcome to C++ Programming!" << std::endl;
    return 0;
}`,
      starterCode: `#include <iostream>

int main() {
    std::cout << "Hello C++ 2026" << std::endl;
    return 0;
}
`,
      practiceTask: `ใช้ <code>std::cout</code> เพื่อแสดงผลข้อความ <code>Hello C++ 2026</code>`,
      expectedOutput: 'Hello C++ 2026',
      validator: (output) => output.trim().includes('Hello C++ 2026')
    },
    {
      id: 'cpp-2',
      lang: 'cpp',
      chapter: 2,
      title: 'บทที่ 2: Standard Vectors',
      subtitle: 'การจัดการชุดข้อมูลแบบไดนามิกด้วย std::vector',
      xpReward: 65,
      explanation: `
        <p><code>std::vector</code> คือ Dynamic Array ใน C++ Standard Template Library (STL) สามารถขยายขนาดได้อัตโนมัติเมื่อเพิ่มข้อมูลด้วย <code>push_back()</code></p>
      `,
      exampleCode: `#include <iostream>
#include <vector>

int main() {
    std::vector<int> nums = {10, 20, 30};
    std::cout << "Size: " << nums.size() << std::endl;
    return 0;
}`,
      starterCode: `#include <iostream>
#include <vector>

int main() {
    std::vector<int> nums = {10, 20, 30};
    std::cout << "Size: " << nums.size() << std::endl;
    return 0;
}
`,
      practiceTask: `สร้างเวกเตอร์ 3 ตัวเลข และพิมพ์ขนาดของเวกเตอร์ด้วย <code>Size: 3</code>`,
      expectedOutput: 'Size: 3',
      validator: (output) => output.trim().includes('Size: 3')
    },
    {
      id: 'cpp-3',
      lang: 'cpp',
      chapter: 3,
      title: 'บทที่ 3: Functions & Pass-by-Reference',
      subtitle: 'การส่งผ่านค่าตัวแปรแบบ Reference (&)',
      xpReward: 75,
      explanation: `
        <p>ใน C++ การใส่เครื่องหมาย <code>&</code> หน้าพารามิเตอร์ของฟังก์ชันจะเป็นการส่งค่าแบบ Pass-by-Reference ทำให้สามารถแก้ไขค่าตัวแปรต้นฉบับได้โดยตรงโดยไม่ต้องคัดลอกข้อมูล</p>
      `,
      exampleCode: `#include <iostream>

void doubleVal(int &x) {
    x *= 2;
}

int main() {
    int val = 5;
    doubleVal(val);
    std::cout << "Doubled: " << val << std::endl;
    return 0;
}`,
      starterCode: `#include <iostream>

void doubleVal(int &x) {
    x *= 2;
}

int main() {
    int val = 5;
    doubleVal(val);
    std::cout << "Doubled: " << val << std::endl;
    return 0;
}
`,
      practiceTask: `รันฟังก์ชัน Pass-by-Reference ให้แสดงผล <code>Doubled: 10</code>`,
      expectedOutput: 'Doubled: 10',
      validator: (output) => output.trim().includes('Doubled: 10')
    },

    // --- C# LESSONS (3 Lessons) ---
    {
      id: 'csharp-1',
      lang: 'csharp',
      chapter: 1,
      title: 'บทที่ 1: C# Classes & Program Entry',
      subtitle: 'โครงสร้างโปรแกรม .NET และ Console.WriteLine',
      xpReward: 50,
      explanation: `
        <p>C# เป็นภาษาที่มีความเป็น Object-Oriented สูง ทุกอย่างจะอยู่ภายใต้ Class และเริ่มทำงานที่เมธอด <code>static void Main()</code></p>
      `,
      exampleCode: `using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello from C# .NET!");
    }
}`,
      starterCode: `using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello C# World!");
    }
}
`,
      practiceTask: `ใช้ <code>Console.WriteLine</code> แสดงข้อความ <code>Hello C# World!</code>`,
      expectedOutput: 'Hello C# World!',
      validator: (output) => output.trim().includes('Hello C# World!')
    },
    {
      id: 'csharp-2',
      lang: 'csharp',
      chapter: 2,
      title: 'บทที่ 2: String Interpolation',
      subtitle: 'การจัดรูปแบบข้อความด้วยเครื่องหมาย $',
      xpReward: 60,
      explanation: `
        <p>C# รองรับ String Interpolation โดยการใส่เครื่องหมาย <code>$</code> หน้าเครื่องหมายคำพูดคู่ ทำให้สามารถแทรกตัวแปรลงในสตริงได้โดยตรง เช่น <code>$"Hello {name}"</code></p>
      `,
      exampleCode: `using System;

class Program {
    static void Main() {
        string lang = "C#";
        int ver = 12;
        Console.WriteLine($"Learning {lang} version {ver}");
    }
}`,
      starterCode: `using System;

class Program {
    static void Main() {
        string lang = "C#";
        Console.WriteLine($"Welcome to {lang}!");
    }
}
`,
      practiceTask: `แสดงผลข้อความ <code>Welcome to C#!</code> ด้วย String Interpolation`,
      expectedOutput: 'Welcome to C#!',
      validator: (output) => output.trim().includes('Welcome to C#!')
    },
    {
      id: 'csharp-3',
      lang: 'csharp',
      chapter: 3,
      title: 'บทที่ 3: Foreach Loops',
      subtitle: 'การวนซ้ำคอลเลกชันด้วย foreach',
      xpReward: 70,
      explanation: `
        <p>คำสั่ง <code>foreach</code> ใน C# ออกแบบมาเพื่อการท่องไปในชุดข้อมูล เช่น Array หรือ List ได้อย่างปลอดภัยและอ่านง่าย</p>
      `,
      exampleCode: `using System;

class Program {
    static void Main() {
        string[] items = {"Code", "Build", "Ship"};
        foreach (var item in items) {
            Console.WriteLine(item);
        }
    }
}`,
      starterCode: `using System;

class Program {
    static void Main() {
        string[] items = {"Code", "Build", "Ship"};
        foreach (var item in items) {
            Console.WriteLine($"Phase: {item}");
        }
    }
}
`,
      practiceTask: `แสดงผล <code>Phase: Code</code>, <code>Phase: Build</code>, <code>Phase: Ship</code>`,
      expectedOutput: 'Phase: Code\nPhase: Build\nPhase: Ship',
      validator: (output) => output.includes('Phase: Code') && output.includes('Phase: Ship')
    },

    // --- LUA LESSONS (3 Lessons) ---
    {
      id: 'lua-1',
      lang: 'lua',
      chapter: 1,
      title: 'บทที่ 1: Lua Syntax & Variables',
      subtitle: 'ไวยากรณ์เรียบง่ายและตัวแปร local',
      xpReward: 50,
      explanation: `
        <p>Lua เป็นภาษา Script ที่เบาและเร็วที่สุด นิยมใช้ในอุตสาหกรรมเกม เช่น Roblox, World of Warcraft</p>
        <p>การประกาศตัวแปรควรใช้คีย์เวิร์ด <code>local</code> เสมอเพื่อจำกัดขอบเขตการเข้าถึง</p>
      `,
      exampleCode: `local gameTitle = "CyberQuest"
local score = 1500

print("Game:", gameTitle)
print("Score:", score)`,
      starterCode: `local player = "Hero"
print("Player Name:", player)
`,
      practiceTask: `ประกาศตัวแปร <code>local player = "Hero"</code> และแสดงผล <code>Player Name: Hero</code>`,
      expectedOutput: 'Player Name: Hero',
      validator: (output) => output.trim().includes('Player Name: Hero')
    },
    {
      id: 'lua-2',
      lang: 'lua',
      chapter: 2,
      title: 'บทที่ 2: Tables in Lua',
      subtitle: 'โครงสร้างข้อมูลหลักหนึ่งเดียวของ Lua',
      xpReward: 65,
      explanation: `
        <p>ใน Lua ไม่มี Array หรือ Dictionary แยกกัน แต่ใช้ <strong>Table</strong> เป็นโครงสร้างข้อมูลอเนกประสงค์แทนทั้งหมด (สร้างด้วยปีกกา <code>{}</code>)</p>
      `,
      exampleCode: `local inventory = {"Sword", "Shield", "Potion"}
print("First item:", inventory[1]) -- Lua index เริ่มต้นที่ 1`,
      starterCode: `local hero = { name = "Knight", hp = 100 }
print("Hero HP:", hero.hp)
`,
      practiceTask: `สร้าง Table และเข้าถึงค่า <code>hero.hp</code> ให้แสดงผล <code>Hero HP: 100</code>`,
      expectedOutput: 'Hero HP: 100',
      validator: (output) => output.trim().includes('Hero HP: 100')
    },
    {
      id: 'lua-3',
      lang: 'lua',
      chapter: 3,
      title: 'บทที่ 3: Functions & End blocks',
      subtitle: 'การสร้างฟังก์ชันและปิดบล็อกด้วย end',
      xpReward: 75,
      explanation: `
        <p>ฟังก์ชันใน Lua กำหนดด้วย <code>function name()</code> และปิดท้ายบล็อกด้วยคำว่า <code>end</code> เสมอ</p>
      `,
      exampleCode: `local function add(a, b)
    return a + b
end

print("Sum:", add(5, 7))`,
      starterCode: `local function getGreeting(name)
    return "Welcome, " .. name
end

print(getGreeting("Coder"))
`,
      practiceTask: `เรียกใช้ฟังก์ชัน <code>getGreeting("Coder")</code> ให้ได้ผลลัพธ์ <code>Welcome, Coder</code>`,
      expectedOutput: 'Welcome, Coder',
      validator: (output) => output.trim().includes('Welcome, Coder')
    },

    // --- JAVA LESSONS (3 Lessons) ---
    {
      id: 'java-1',
      lang: 'java',
      chapter: 1,
      title: 'บทที่ 1: Java Classes & System.out',
      subtitle: 'โครงสร้างภาษา Java และ System.out.println',
      xpReward: 50,
      explanation: `
        <p>Java เป็นภาษาโปรแกรมสำหรับองค์กรที่เน้นความเสถียรและความปลอดภัย โค้ดทั้งหมดต้องถูกบรรจุใน class ที่มีชื่อตรงกับชื่อไฟล์</p>
      `,
      exampleCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java Enterprise!");
    }
}`,
      starterCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello Java World!");
    }
}
`,
      practiceTask: `ใช้คำสั่ง <code>System.out.println</code> แสดงข้อความ <code>Hello Java World!</code>`,
      expectedOutput: 'Hello Java World!',
      validator: (output) => output.trim().includes('Hello Java World!')
    },
    {
      id: 'java-2',
      lang: 'java',
      chapter: 2,
      title: 'บทที่ 2: Primitive Types in Java',
      subtitle: 'int, double, boolean และ String',
      xpReward: 60,
      explanation: `
        <p>Java แบ่งชนิดข้อมูลเป็น Primitive (เช่น <code>int</code>, <code>double</code>, <code>boolean</code>) และ Reference Type (เช่น <code>String</code>)</p>
      `,
      exampleCode: `public class Main {
    public static void main(String[] args) {
        int level = 5;
        double xpMultiplier = 1.5;
        System.out.println("Level: " + level + " | Multiplier: " + xpMultiplier);
    }
}`,
      starterCode: `public class Main {
    public static void main(String[] args) {
        int level = 5;
        System.out.println("Current Level: " + level);
    }
}
`,
      practiceTask: `พิมพ์ข้อความ <code>Current Level: 5</code>`,
      expectedOutput: 'Current Level: 5',
      validator: (output) => output.trim().includes('Current Level: 5')
    },
    {
      id: 'java-3',
      lang: 'java',
      chapter: 3,
      title: 'บทที่ 3: Static Methods',
      subtitle: 'การสร้างเมธอดฟังก์ชันและการเรียกใช้งาน',
      xpReward: 75,
      explanation: `
        <p>เมธอดที่มีคีย์เวิร์ด <code>static</code> สามารถถูกเรียกใช้งานได้โดยตรงโดยไม่ต้องสร้าง instance ของ Object</p>
      `,
      exampleCode: `public class Main {
    public static int multiply(int a, int b) {
        return a * b;
    }

    public static void main(String[] args) {
        int result = multiply(6, 7);
        System.out.println("Product: " + result);
    }
}`,
      starterCode: `public class Main {
    public static int multiply(int a, int b) {
        return a * b;
    }

    public static void main(String[] args) {
        System.out.println("Product: " + multiply(6, 7));
    }
}
`,
      practiceTask: `เรียกเมธอด <code>multiply(6, 7)</code> เพื่อแสดงผล <code>Product: 42</code>`,
      expectedOutput: 'Product: 42',
      validator: (output) => output.trim().includes('Product: 42')
    },

    // --- CSS LESSONS (3 Lessons) ---
    {
      id: 'css-1',
      lang: 'css',
      chapter: 1,
      title: 'บทที่ 1: Selectors & Box Model',
      subtitle: 'การเลือกองค์ประกอบและโครงสร้างกล่อง',
      xpReward: 50,
      explanation: `
        <p>CSS (Cascading Style Sheets) ใช้ตกแต่งหน้าเว็บ Box Model ประกอบด้วย Content, Padding, Border และ Margin</p>
      `,
      exampleCode: `.sandbox-box {
    background-color: #00f2fe;
    padding: 20px;
    border-radius: 12px;
    color: #000000;
}`,
      starterCode: `.sandbox-box {
    background-color: #10b981;
    padding: 15px;
    border-radius: 8px;
    color: #ffffff;
}
`,
      practiceTask: `กำหนด <code>padding: 15px</code> และ <code>border-radius: 8px</code> ให้กับ <code>.sandbox-box</code>`,
      expectedOutput: 'CSS Box Model Styled',
      validator: (code) => code.includes('padding') && code.includes('border-radius')
    },
    {
      id: 'css-2',
      lang: 'css',
      chapter: 2,
      title: 'บทที่ 2: Flexbox Mastery',
      subtitle: 'การจัดเลย์เอาต์ด้วย display: flex',
      xpReward: 70,
      explanation: `
        <p>Flexbox ช่วยให้การจัดเรียงไอเท็มในแนวนอนหรือแนวตั้ง และการจัดกึ่งกลางทำได้อย่างง่ายดายผ่าน <code>display: flex</code>, <code>justify-content</code> และ <code>align-items</code></p>
      `,
      exampleCode: `.css-sandbox {
    display: flex;
    justify-content: center;
    align-items: center;
}`,
      starterCode: `.css-sandbox {
    display: flex;
    justify-content: center;
    align-items: center;
}
`,
      practiceTask: `ใช้ <code>display: flex</code> และ <code>justify-content: center</code> เพื่อจัดองค์ประกอบให้อยู่กึ่งกลาง`,
      expectedOutput: 'Flexbox Centered',
      validator: (code) => code.includes('display: flex') && code.includes('justify-content: center')
    },
    {
      id: 'css-3',
      lang: 'css',
      chapter: 3,
      title: 'บทที่ 3: CSS Grid Layout',
      subtitle: 'การสร้างตารางเลย์เอาต์สองมิติ',
      xpReward: 80,
      explanation: `
        <p>CSS Grid คือโมเดลเลย์เอาต์ 2 มิติที่ทรงพลังที่สุด กำหนดจำนวนคอลัมน์ได้ด้วย <code>grid-template-columns</code></p>
      `,
      exampleCode: `.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
}`,
      starterCode: `.css-sandbox {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
}
`,
      practiceTask: `ใช้ <code>display: grid</code> เพื่อสร้างเลย์เอาต์แบบกริด`,
      expectedOutput: 'CSS Grid Configured',
      validator: (code) => code.includes('display: grid')
    }
  ],

  challenges: [
    // C Challenges
    {
      id: 'chal-c-1',
      lang: 'c',
      difficulty: 'easy',
      title: 'แปลงเซลเซียสเป็นฟาเรนไฮต์ (Celsius to Fahrenheit)',
      desc: 'เขียนโปรแกรม C คำนวณอุณหภูมิฟาเรนไฮต์จากสูตร F = (C * 9/5) + 32',
      sampleInput: 'celsius = 25',
      sampleOutput: 'Fahrenheit: 77.0',
      xpReward: 100,
      hints: [
        { tier: 1, cost: 10, text: 'ใช้สูตร (celsius * 9.0 / 5.0) + 32.0' }
      ],
      starterCode: `#include <stdio.h>

int main() {
    float c = 25.0;
    float f = (c * 9.0 / 5.0) + 32.0;
    printf("Fahrenheit: %.1f\\n", f);
    return 0;
}
`,
      testCases: [
        { input: [], expected: 'Fahrenheit: 77.0' }
      ]
    },
    {
      id: 'chal-c-2',
      lang: 'c',
      difficulty: 'medium',
      title: 'หาค่าสูงสุดใน 3 ตัวเลข (Max of Three)',
      desc: 'เขียนโปรแกรมเปรียบเทียบหาตัวเลขที่มีค่ามากที่สุดจาก 3 ตัวแปร a, b, c',
      sampleInput: 'a=12, b=45, c=28',
      sampleOutput: 'Max: 45',
      xpReward: 150,
      hints: [
        { tier: 1, cost: 10, text: 'สร้างตัวแปร int max = a; แล้วใช้ if เปรียบเทียบกับ b และ c' }
      ],
      starterCode: `#include <stdio.h>

int main() {
    int a = 12, b = 45, c = 28;
    int max = a;
    if (b > max) max = b;
    if (c > max) max = c;
    printf("Max: %d\\n", max);
    return 0;
}
`,
      testCases: [
        { input: [], expected: 'Max: 45' }
      ]
    },

    // C++ Challenges
    {
      id: 'chal-cpp-1',
      lang: 'cpp',
      difficulty: 'easy',
      title: 'ผลรวมสมาชิกใน Vector (Vector Sum)',
      desc: 'เขียนโปรแกรมคำนวณผลรวมของตัวเลขทุกตัวใน std::vector',
      sampleInput: '{5, 10, 15, 20}',
      sampleOutput: 'Total Sum: 50',
      xpReward: 100,
      hints: [
        { tier: 1, cost: 10, text: 'ใช้ range-based for loop เช่น for (int n : nums)' }
      ],
      starterCode: `#include <iostream>
#include <vector>

int main() {
    std::vector<int> nums = {5, 10, 15, 20};
    int sum = 0;
    for (int n : nums) sum += n;
    std::cout << "Total Sum: " << sum << std::endl;
    return 0;
}
`,
      testCases: [
        { input: [], expected: 'Total Sum: 50' }
      ]
    },

    // C# Challenges
    {
      id: 'chal-cs-1',
      lang: 'csharp',
      difficulty: 'easy',
      title: 'ระบบจัดรูปแบบชื่อผู้ใช้ (Greeting Formatter)',
      desc: 'เขียนโปรแกรม C# แสดงข้อความต้อนรับผู้ใช้งานด้วย String Interpolation',
      sampleInput: 'name = "Neo", role = "Admin"',
      sampleOutput: 'User: Neo [Admin]',
      xpReward: 100,
      hints: [
        { tier: 1, cost: 10, text: 'ใช้ Console.WriteLine($"User: {name} [{role}]");' }
      ],
      starterCode: `using System;

class Program {
    static void Main() {
        string name = "Neo";
        string role = "Admin";
        Console.WriteLine($"User: {name} [{role}]");
    }
}
`,
      testCases: [
        { input: [], expected: 'User: Neo [Admin]' }
      ]
    },

    // Lua Challenges
    {
      id: 'chal-lua-1',
      lang: 'lua',
      difficulty: 'easy',
      title: 'คำนวณ Factorial ใน Lua',
      desc: 'เขียนฟังก์ชัน factorial(n) คำนวณผลคูณสะสม 1 ถึง n',
      sampleInput: 'factorial(5)',
      sampleOutput: '120',
      xpReward: 120,
      hints: [
        { tier: 1, cost: 10, text: 'ใช้ for loop ตั้งแต่ 1 ถึง n หรือใช้ recursion' }
      ],
      starterCode: `local function factorial(n)
    local result = 1
    for i = 1, n do
        result = result * i
    end
    return result
end

print("Factorial 5:", factorial(5))
`,
      testCases: [
        { input: [], expected: 'Factorial 5: 120' }
      ]
    },

    // Java Challenges
    {
      id: 'chal-java-1',
      lang: 'java',
      difficulty: 'easy',
      title: 'ตรวจสอบจำนวนบวก ลบ หรือศูนย์ (Number Sign Checker)',
      desc: 'เขียนโปรแกรม Java ตรวจสอบว่าตัวเลขเป็น Positive, Negative หรือ Zero',
      sampleInput: 'num = -15',
      sampleOutput: 'Sign: Negative',
      xpReward: 100,
      hints: [
        { tier: 1, cost: 10, text: 'ใช้ if (n > 0) else if (n < 0) else' }
      ],
      starterCode: `public class Main {
    public static void main(String[] args) {
        int num = -15;
        if (num > 0) {
            System.out.println("Sign: Positive");
        } else if (num < 0) {
            System.out.println("Sign: Negative");
        } else {
            System.out.println("Sign: Zero");
        }
    }
}
`,
      testCases: [
        { input: [], expected: 'Sign: Negative' }
      ]
    },

    // CSS Challenges
    {
      id: 'chal-css-1',
      lang: 'css',
      difficulty: 'easy',
      title: 'จัดกึ่งกลางกล่องด้วย Flexbox (Center Flex Item)',
      desc: 'เขียน CSS ให้ container จัดองค์ประกอบลูกให้อยู่กึ่งกลางทั้งแนวตั้งและแนวนอน',
      sampleInput: '.css-sandbox { ... }',
      sampleOutput: 'display: flex; justify-content: center; align-items: center;',
      xpReward: 100,
      hints: [
        { tier: 1, cost: 10, text: 'กำหนด 3 คุณสมบัติ: display: flex, justify-content: center, align-items: center' }
      ],
      starterCode: `.css-sandbox {
    display: flex;
    justify-content: center;
    align-items: center;
}
`,
      testCases: [
        { input: [], expected: 'Flexbox Centered' }
      ]
    }
  ]
};

window.OtherLanguagesData = OtherLanguagesData;
