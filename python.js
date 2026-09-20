/**
 * ==========================================================================
 * TUTORCODE PLATFORM - PYTHON MODULE (python.js)
 * Course 06066303: Problem Solving and Computer Programming
 * 9 In-Depth Lessons + 25 University Problem-Solving Challenges
 * ==========================================================================
 */
const PythonData = {
  lessons: [
    {
      id: 'python-1',
      lang: 'python',
      chapter: 1,
      title: "บทที่ 1: การแก้ปัญหาเชิงคำนวณและผังงาน (Problem Solving & Flowcharts)",
      subtitle: "กระบวนการคิด Input-Process-Output และการจำลองตรรกะก่อนเขียนโค้ด",
      xpReward: 60,
      explanation: `
      <h4>ยินดีต้อนรับสู่วิชา 06066303 การแก้ปัญหาและการโปรแกรมคอมพิวเตอร์</h4>
      <p>การเขียนโปรแกรมไม่ใช่แค่การพิมพ์ไวยากรณ์ (Syntax) แต่คือ <strong>"การแปลงวิธีคิดในการแก้ปัญหาของมนุษย์ให้เป็นลำดับคำสั่งที่คอมพิวเตอร์ทำงานได้"</strong> (Algorithmic Thinking)</p>
      
      <h5>1. วงจรการพัฒนาโปรแกรม (Problem-Solving Cycle):</h5>
      <ol>
        <li><strong>ทำความเข้าใจปัญหา (Understand Problem):</strong> ระบุว่าสิ่งที่เราต้องการคืออะไร ข้อมูลนำเข้าคืออะไร</li>
        <li><strong>วิเคราะห์ระบบ IPO (Input - Process - Output):</strong>
          <ul>
            <li><code>Input</code>: ข้อมูลที่รับเข้ามา เช่น ความกว้าง (width) และความยาว (height)</li>
            <li><code>Process</code>: ขั้นตอนการคำนวณ เช่น พื้นที่ = กว้าง × ยาว</li>
            <li><code>Output</code>: ผลลัพธ์ที่ต้องการแสดงผล เช่น ตัวเลขพื้นที่สี่เหลี่ยม</li>
          </ul>
        </li>
        <li><strong>ออกแบบผังงาน (Flowchart) / รหัสเทียม (Pseudocode):</strong>
          <ul>
            <li><code>Terminal (วงรี/แคปซูล)</code>: จุดเริ่มต้น (Start) หรือสิ้นสุด (End) ของโปรแกรม</li>
            <li><code>Input/Output (สี่เหลี่ยมด้านขนาน)</code>: รับข้อมูลเข้า หรือแสดงผลข้อมูล</li>
            <li><code>Process (สี่เหลี่ยมผืนผ้า)</code>: การประมวลผล เช่น การคำนวณ หรือการกำหนดค่าตัวแปร</li>
            <li><code>Decision (สี่เหลี่ยมข้าวหลามตัด)</code>: การตรวจสอบเงื่อนไขทางตรรกะ (True / False)</li>
          </ul>
        </li>
        <li><strong>ลงมือเขียนโค้ด (Coding) และทดสอบ (Testing)</strong></li>
      </ol>

      <h5>2. ฟังก์ชันพื้นฐานใน Python:</h5>
      <p>ใน Python เราใช้คำสั่ง <code>print()</code> เพื่อส่งข้อมูลออกทางหน้าจอ และเครื่องหมาย <code>=</code> (Assignment Operator) ในการกำหนดค่าให้ตัวแปร</p>
    `,
      exampleCode: `# ตัวอย่าง IPO: คำนวณพื้นที่สี่เหลี่ยมผืนผ้า
width = 5
height = 10
area = width * height

print("Width:", width)
print("Height:", height)
print("Area:", area)`,
      starterCode: `# ให้นักศึกษาประกาศตัวแปร width = 5 และ height = 10
# จากนั้นคำนวณ area = width * height
# แล้วแสดงผลลัพธ์ด้วย print("Area:", area)

width = 5
height = 10
area = width * height

print("Area:", area)
`,
      practiceTask: `กำหนดตัวแปร <code>width = 5</code> และ <code>height = 10</code> คำนวณหาพื้นที่ <code>area = width * height</code> แล้วสั่ง <code>print("Area:", area)</code> ให้ได้ผลลัพธ์ถูกต้อง`,
      expectedOutput: "Area: 50",
      validator: (output) => output.trim().includes('Area: 50')
    },
    {
      id: 'python-2',
      lang: 'python',
      chapter: 2,
      title: "บทที่ 2: โมเดลหน่วยความจำ ตัวแปร และฟังก์ชัน id()",
      subtitle: "เจาะลึกการจัดเก็บข้อมูลใน RAM, Object References และ Dynamic Typing",
      xpReward: 65,
      explanation: `
      <h4>เบื้องหลังหน่วยความจำในภาษา Python (Python Memory Model)</h4>
      <p>ในภาษา C หรือ C++ ตัวแปรคือ "กล่องใส่ข้อมูล" ที่จองขนาดแน่นอนใน Memory แต่ใน <strong>Python ทุกสิ่งคือ Object</strong> (Everything is an Object)!</p>

      <h5>1. ตัวแปรในฐานะ Reference Tag (ป้ายชื่อ):</h5>
      <p>เมื่อเราสั่ง <code>x = 42</code> เกิดอะไรขึ้นใน RAM?</p>
      <ol>
        <li>Python สร้าง Integer Object ที่มีค่า <code>42</code> ขึ้นใน Heap Memory</li>
        <li>นำชื่อตัวแปร <code>x</code> ไปผูก (Bind หรือ Point) เข้ากับตำแหน่ง Address ของ Object นั้น</li>
        <li>หากเราสั่ง <code>y = x</code> ตัวแปร <code>y</code> จะชี้ไปยัง Object เดียวกัน ไม่ได้สร้างสำเนาใหม่!</li>
      </ol>

      <h5>2. ฟังก์ชัน <code>id()</code>:</h5>
      <p>ฟังก์ชัน <code>id(object)</code> จะคืนค่า Memory Address เฉพาะตัวของ Object นั้นในระบบ</p>

      <h5>3. Small Integer Caching (-5 ถึง 256):</h5>
      <p>Python จะจองหน่วยความจำล่วงหน้าสำหรับเลขจำนวนเต็มระหว่าง -5 ถึง 256 เพื่อความรวดเร็วในการประมวลผล ดังนั้นถ้าเราสร้างตัวแปร <code>a = 100</code> และ <code>b = 100</code> ฟังก์ชัน <code>id(a) == id(b)</code> จะได้ผลลัพธ์เป็น <code>True</code> เสมอ!</p>
    `,
      exampleCode: `# ตรวจสอบ Memory Address ด้วย id()
a = 42
b = a

print("Value of a:", a)
print("Address of a:", id(a))
print("Address of b:", id(b))
print("Same object?", id(a) == id(b))`,
      starterCode: `# ประกาศตัวแปร ram_var = 42
# พิมพ์ค่า Memory ID และ Value ของตัวแปรออกทางหน้าจอ

ram_var = 42
print("Memory ID:", id(ram_var))
print("Value:", ram_var)
`,
      practiceTask: `สร้างตัวแปร <code>ram_var = 42</code> แล้วพิมพ์ <code>print("Memory ID:", id(ram_var))</code> และ <code>print("Value:", ram_var)</code>`,
      expectedOutput: "Value: 42",
      validator: (output) => output.trim().includes('Value: 42') && output.includes('Memory ID:')
    },
    {
      id: 'python-3',
      lang: 'python',
      chapter: 3,
      title: "บทที่ 3: ชนิดข้อมูล ตัวดำเนินการ และลำดับความสำคัญ (Data Types & Operators)",
      subtitle: "Primitive Types, Arithmetic Operators, Floor Division และ Operator Precedence",
      xpReward: 70,
      explanation: `
      <h4>ชนิดข้อมูลและตัวดำเนินการที่นักศึกษาไอทีต้องรู้</h4>
      <p>ข้อมูลในระบบสารสนเทศประกอบด้วยชนิดข้อมูลหลัก (Primitive Data Types) ได้แก่:</p>
      <ul>
        <li><code>int</code>: จำนวนเต็ม เช่น <code>-15, 0, 100</code></li>
        <li><code>float</code>: จำนวนจริงที่มีจุดทศนิยม เช่น <code>3.14159, -0.05</code></li>
        <li><code>str</code>: ข้อความ (String) ครอบด้วยเครื่องหมาย <code>"..."</code> หรือ <code>'...'</code></li>
        <li><code>bool</code>: ค่าความจริงทางตรรกะ มีเพียงสองค่าคือ <code>True</code> หรือ <code>False</code></li>
      </ul>

      <h5>ตัวดำเนินการทางคณิตศาสตร์พิเศษใน Python:</h5>
      <ul>
        <li><code>/</code>: หารธรรมดา (Float Division) -> ผลลัพธ์ได้ทศนิยมเสมอ เช่น <code>7 / 2 = 3.5</code></li>
        <li><code>//</code>: หารปัดเศษลง (Floor Division) -> เอาเฉพาะจำนวนเต็ม เช่น <code>7 // 2 = 3</code></li>
        <li><code>%</code>: มอดุโล (Modulus) -> หาเศษที่เหลือจากการหาร เช่น <code>7 % 2 = 1</code></li>
        <li><code>**</code>: เลขยกกำลัง (Exponentiation) เช่น <code>2 ** 3 = 8</code></li>
      </ul>

      <h5>ลำดับความสำคัญของเครื่องหมาย (Precedence):</h5>
      <p>วงเล็บ <code>()</code> &gt; ยกกำลัง <code>**</code> &gt; คูณ/หาร <code>*, /, //, %</code> &gt; บวก/ลบ <code>+, -</code> &gt; เปรียบเทียบ <code>==, !=, &gt;, &lt;</code> &gt; ตรรกะ <code>not, and, or</code></p>
    `,
      exampleCode: `# ตัวอย่างการแปลงวินาทีเป็น นาที และ วินาที
total_seconds = 125

minutes = total_seconds // 60
seconds = total_seconds % 60

print(minutes, "m", seconds, "s")`,
      starterCode: `# จงแปลง total_seconds = 125 เป็นจำนวนนาทีและวินาทีที่เหลือ
# โดย minutes = total_seconds // 60
# และ seconds = total_seconds % 60
# แล้วแสดงผลด้วย print(minutes, "m", seconds, "s")

total_seconds = 125
minutes = total_seconds // 60
seconds = total_seconds % 60

print(minutes, "m", seconds, "s")
`,
      practiceTask: `คำนวณแปลง <code>total_seconds = 125</code> เป็นนาทีและวินาทีด้วย <code>//</code> และ <code>%</code> แล้วพิมพ์ <code>print(minutes, "m", seconds, "s")</code>`,
      expectedOutput: "2 m 5 s",
      validator: (output) => output.trim().includes('2 m 5 s')
    },
    {
      id: 'python-4',
      lang: 'python',
      chapter: 4,
      title: "บทที่ 4: การควบคุมทิศทางการทำงานตามเงื่อนไข (Conditionals & Branching)",
      subtitle: "if, elif, else, Nested Conditions และ Short-Circuit Evaluation",
      xpReward: 75,
      explanation: `
      <h4>การตัดสินใจของคอมพิวเตอร์ (Selection Control Structure)</h4>
      <p>โปรแกรมคอมพิวเตอร์ที่มีประโยชน์ต้องสามารถเลือกเส้นทางการทำงานตามข้อมูลที่ได้รับ (Branching Logic) โดยใช้คำสั่ง <code>if</code>, <code>elif</code> (else if), และ <code>else</code></p>

      <h5>1. กฎการตรวจสอบความจริง (Truthy & Falsy Values):</h5>
      <p>ใน Python สิ่งต่อไปนี้มีค่าทางตรรกะเป็น <code>False</code> อัตโนมัติ: <code>0</code>, <code>0.0</code>, <code>""</code> (สตริงว่าง), <code>[]</code> (ลิสต์ว่าง), <code>{}</code> (ดิกชันนารีว่าง), <code>None</code> และ <code>False</code> นอกเหนือจากนี้ถือเป็น <code>True</code> ทั้งสิ้น</p>

      <h5>2. การประเมินผลแบบลัด (Short-Circuit Evaluation):</h5>
      <ul>
        <li><code>A and B</code>: ถ้าเงื่อนไข <code>A</code> เป็นเท็จ ระบบจะไม่ตรวจสอบ <code>B</code> เลย เพราะผลลัพธ์เป็นเท็จแน่นอน</li>
        <li><code>A or B</code>: ถ้าเงื่อนไข <code>A</code> เป็นจริง ระบบจะไม่ตรวจสอบ <code>B</code> เลย เพราะผลลัพธ์เป็นจริงแน่นอน</li>
      </ul>

      <h5>3. โครงสร้างการตัดเกรดมาตรฐาน:</h5>
      <pre><code>if score >= 80:
    print("Grade: A")
elif score >= 70:
    print("Grade: B")
elif score >= 60:
    print("Grade: C")
else:
    print("Grade: F")</code></pre>
    `,
      exampleCode: `# ตัวอย่างการตัดเกรดนักศึกษา
score = 75

if score >= 80:
    grade = "A"
elif score >= 70:
    grade = "B"
elif score >= 60:
    grade = "C"
else:
    grade = "F"

print("Grade:", grade)`,
      starterCode: `# จงเขียนคำสั่ง if-elif ตรวจสอบคะแนน score = 75
# ถ้า score >= 80 ให้ grade = "A"
# ถ้า score >= 70 ให้ grade = "B"
# แล้วแสดงผล print("Grade:", grade)

score = 75
if score >= 80:
    grade = "A"
elif score >= 70:
    grade = "B"
else:
    grade = "C"

print("Grade:", grade)
`,
      practiceTask: `ตรวจสอบตัวแปร <code>score = 75</code> เพื่อกำหนดตัวแปร <code>grade = "B"</code> ผ่านโครงสร้าง <code>if-elif</code> แล้วแสดงผล <code>print("Grade:", grade)</code>`,
      expectedOutput: "Grade: B",
      validator: (output) => output.trim().includes('Grade: B')
    },
    {
      id: 'python-5',
      lang: 'python',
      chapter: 5,
      title: "บทที่ 5: ลูปและการวนซ้ำ (Loops & Iteration Control)",
      subtitle: "for, while, range(), Loop Invariants, break และ continue",
      xpReward: 80,
      explanation: `
      <h4>การทำซ้ำและการควบคุมลูป (Repetition Control Structures)</h4>
      <p>ในการประมวลผลข้อมูลจำนวนมาก (Data Processing) ลูปคือหัวใจสำคัญของการทำงานอัตโนมัติ</p>

      <h5>1. Definite Loop (<code>for</code>) กับ Indefinite Loop (<code>while</code>):</h5>
      <ul>
        <li><code>for</code>: เหมาะสำหรับงานที่ทราบจำนวนรอบที่แน่นอน เช่น วนรอบสมาชิกในลิสต์ หรือใช้คู่กับ <code>range()</code></li>
        <li><code>while</code>: เหมาะสำหรับงานที่ต้องวนซ้ำจนกว่าเงื่อนไขจะกลายเป็นเท็จ (Sentinel Controlled)</li>
      </ul>

      <h5>2. ฟังก์ชัน <code>range(start, stop, step)</code>:</h5>
      <p>ข้อควรระวังสำคัญ: ค่า <code>stop</code> ใน Python เป็น <strong>Exclusive</strong> (ไม่นับรวมค่าสุดท้าย)! เช่น <code>range(1, 11)</code> จะสร้างลำดับเลข <code>1, 2, 3, 4, 5, 6, 7, 8, 9, 10</code> (ไม่รวม 11)</p>

      <h5>3. Accumulator Pattern (การสะสมค่าผลรวม):</h5>
      <p>รูปแบบการเขียนโปรแกรมมาตรฐานสำหรับการหาผลรวม หรือค่าสถิติ:</p>
      <pre><code>total = 0
for i in range(1, 11):
    total = total + i  # หรือ total += i
print("Sum:", total)</code></pre>
    `,
      exampleCode: `# การหาผลรวมของเลขตั้งแต่ 1 ถึง 10
total = 0
for i in range(1, 11):
    total += i

print("Sum:", total)`,
      starterCode: `# ให้นักศึกษาใช้ลูป for ร่วมกับ range(1, 11)
# หาผลรวมของเลข 1 ถึง 10 เก็บไว้ในตัวแปร total
# แล้วแสดงผลลัพธ์ด้วย print("Sum:", total)

total = 0
for i in range(1, 11):
    total = total + i

print("Sum:", total)
`,
      practiceTask: `ใช้ลูป <code>for i in range(1, 11):</code> คำนวณหาผลรวมเก็บในตัวแปร <code>total</code> แล้วสั่ง <code>print("Sum:", total)</code>`,
      expectedOutput: "Sum: 55",
      validator: (output) => output.trim().includes('Sum: 55')
    },
    {
      id: 'python-6',
      lang: 'python',
      chapter: 6,
      title: "บทที่ 6: ฟังก์ชันและกฎขอบเขตตัวแปร (Functions & LEGB Scope Rule)",
      subtitle: "Modular Programming, Parameters vs Arguments และ Local vs Global Scope",
      xpReward: 85,
      explanation: `
      <h4>การเขียนโปรแกรมแบบแยกส่วน (Modular Programming)</h4>
      <p>ฟังก์ชันช่วยให้เราแบ่งปัญหาใหญ่ให้เป็นปัญหาย่อย (Decomposition) นำโค้ดกลับมาใช้ซ้ำได้ (Code Reusability) และทำให้โปรแกรมอ่านง่าย</p>

      <h5>1. Parameters vs Arguments:</h5>
      <ul>
        <li><code>Parameters</code>: ตัวแปรที่ตั้งชื่อไว้ในนิยามฟังก์ชัน <code>def calc(w, h):</code></li>
        <li><code>Arguments</code>: ค่าข้อมูลจริงที่ส่งผ่านเข้าไปตอนเรียกใช้งาน <code>calc(70, 1.75)</code></li>
      </ul>

      <h5>2. ความแตกต่างระหว่าง <code>return</code> และ <code>print()</code>:</h5>
      <p><code>return</code> ทำหน้าที่ส่งค่าผลลัพธ์กลับไปยังจุดที่เรียกใช้ เพื่อให้นำผลลัพธ์ไปคำนวณต่อได้ ขณะที่ <code>print()</code> เพียงแค่นำข้อมูลออกจอภาพแต่ไม่ส่งค่าใดกลับมาให้โปรแกรม (คืนค่า <code>None</code>)</p>

      <h5>3. กฎลำดับขอบเขตตัวแปร LEGB Rule:</h5>
      <p>เมื่อ Python พยายามค้นหาค่าของตัวแปร จะค้นหาตามลำดับ 4 ชั้นนี้เสมอ:</p>
      <ol>
        <li><strong>L (Local):</strong> ตัวแปรที่ประกาศอยู่ภายในฟังก์ชันนั้นๆ</li>
        <li><strong>E (Enclosing):</strong> ตัวแปรในฟังก์ชันภายนอกที่ครอบอยู่ (กรณี Nested Functions)</li>
        <li><strong>G (Global):</strong> ตัวแปรระดับบนสุดของสคริปต์/ไฟล์</li>
        <li><strong>B (Built-in):</strong> ฟังก์ชันและคีย์เวิร์ดที่ติดตั้งมาพร้อมภาษา Python เช่น <code>len, print, range</code></li>
      </ol>
    `,
      exampleCode: `# ฟังก์ชันคำนวณดัชนีมวลกาย BMI = weight / (height ^ 2)
def calc_bmi(weight, height):
    bmi = weight / (height ** 2)
    return round(bmi, 2)

my_bmi = calc_bmi(70, 1.75)
print("BMI:", my_bmi)`,
      starterCode: `# จงเขียนฟังก์ชัน calc_bmi(weight, height)
# คืนค่า round(weight / (height ** 2), 2)
# จากนั้นเรียกใช้ฟังก์ชันด้วยน้ำหนัก 70 ส่วนสูง 1.75 แล้วแสดงผล

def calc_bmi(weight, height):
    return round(weight / (height ** 2), 2)

print("BMI:", calc_bmi(70, 1.75))
`,
      practiceTask: `สร้างฟังก์ชัน <code>def calc_bmi(weight, height):</code> คืนค่า BMI ที่ปัดเศษ 2 ตำแหน่ง แล้วสั่ง <code>print("BMI:", calc_bmi(70, 1.75))</code>`,
      expectedOutput: "BMI: 22.86",
      validator: (output) => output.trim().includes('BMI: 22.86')
    },
    {
      id: 'python-7',
      lang: 'python',
      chapter: 7,
      title: "บทที่ 7: โครงสร้างข้อมูล I: ลิสต์และการสไลซ์ (Lists & Slicing)",
      subtitle: "Zero-indexing, Negative Indexing, Slicing [start:stop:step] และ List Methods",
      xpReward: 90,
      explanation: `
      <h4>โครงสร้างข้อมูลลิสต์ (List) ใน Python</h4>
      <p>List เป็นโครงสร้างข้อมูลพื้นฐานที่ใช้เก็บชุดของข้อมูล มีคุณสมบัติ <strong>Ordered</strong> (เรียงลำดับแน่นอน), <strong>Mutable</strong> (แก้ไขค่าได้), และ <strong>Heterogeneous</strong> (เก็บข้อมูลต่างชนิดกันได้)</p>

      <h5>1. การเข้าถึงตำแหน่งดัชนี (Indexing):</h5>
      <ul>
        <li><code>Positive Index</code>: เริ่มจากซ้ายไปขวา นับจาก <code>0, 1, 2, ...</code></li>
        <li><code>Negative Index</code>: เริ่มจากขวาไปซ้าย โดยตัวสุดท้ายคือ <code>-1, -2, -3, ...</code></li>
      </ul>

      <h5>2. การสไลซ์ (Slicing Syntax): <code>list[start:stop:step]</code></h5>
      <ul>
        <li><code>nums[1:4]</code>: ตัดข้อมูลตั้งแต่ index 1 ถึง 3 (ไม่รวม 4)</li>
        <li><code>nums[::-1]</code>: กลับลำดับข้อมูลจากหลังมาหน้า (Reverse) ด้วย step -1</li>
      </ul>

      <h5>3. เมธอดสำคัญของ List:</h5>
      <ul>
        <li><code>list.append(x)</code>: เพิ่มข้อมูล <code>x</code> ต่อท้ายลิสต์</li>
        <li><code>list.pop()</code>: ดึงข้อมูลตัวสุดท้ายออกและคืนค่า</li>
        <li><code>len(list)</code>: คืนจำนวนสมาชิกทั้งหมดในลิสต์</li>
      </ul>
    `,
      exampleCode: `# ตัวอย่างการคัดกรองตัวเลขคู่จากลิสต์
numbers = [12, 5, 8, 19, 24, 7, 30]
evens = []

for n in numbers:
    if n % 2 == 0:
        evens.append(n)

print("Evens:", evens)`,
      starterCode: `# กำหนดชุดตัวเลข numbers = [12, 5, 8, 19, 24, 7, 30]
# ให้นักศึกษาวนลูปคัดกรองเฉพาะเลขคู่ (n % 2 == 0) ใส่ในลิสต์ evens
# แล้วแสดงผลด้วย print("Evens:", evens)

numbers = [12, 5, 8, 19, 24, 7, 30]
evens = []
for n in numbers:
    if n % 2 == 0:
        evens.append(n)

print("Evens:", evens)
`,
      practiceTask: `สร้างลิสต์ <code>evens</code> และวนลูปคัดกรองเฉพาะเลขคู่จาก <code>numbers = [12, 5, 8, 19, 24, 7, 30]</code> แล้วสั่ง <code>print("Evens:", evens)</code>`,
      expectedOutput: "Evens: [12, 8, 24, 30]",
      validator: (output) => output.trim().includes('12') && output.includes('8') && output.includes('24') && output.includes('30')
    },
    {
      id: 'python-8',
      lang: 'python',
      chapter: 8,
      title: "บทที่ 8: โครงสร้างข้อมูล II: ดิกชันนารีและเซต (Dictionaries & Sets)",
      subtitle: "Key-Value Mapping, O(1) Hash Table Lookup และ Set Operations",
      xpReward: 95,
      explanation: `
      <h4>พจนานุกรมและตารางแฮช (Dictionaries & Hash Tables)</h4>
      <p>Dictionary คือโครงสร้างข้อมูลแบบจับคู่ <strong>Key-Value Pair</strong> ทำงานด้วยหลักการ <strong>Hash Table</strong> ทำให้การค้นหาข้อมูลมีความเร็วระดับ $O(1)$ Time Complexity ซึ่งเร็วกว่าการค้นหาใน List ที่เป็น $O(n)$</p>

      <h5>1. กฎของ Key ใน Dictionary:</h5>
      <p>Key ต้องเป็นข้อมูลประเภท <strong>Immutable และ Hashable</strong> เสมอ เช่น String, Integer, หรือ Tuple (ห้ามใช้ List เป็น Key)</p>

      <h5>2. เมธอดสำคัญของ Dictionary:</h5>
      <ul>
        <li><code>dict[key]</code>: เข้าถึง Value ของ Key นั้น (ถ้าไม่มีจะเกิด KeyError)</li>
        <li><code>dict.get(key, default)</code>: เข้าถึง Value อย่างปลอดภัย หากไม่มีจะคืนค่า default</li>
        <li><code>dict.keys()</code>: ดึงรายการคีย์ทั้งหมด</li>
        <li><code>dict.values()</code>: ดึงรายการค่าทั้งหมด</li>
      </ul>

      <h5>3. เซต (Set):</h5>
      <p>Set เป็นคอลเลกชันที่ไม่มีลำดับและ <strong>สมาชิกทุกตัวต้องไม่ซ้ำกัน (Unique Elements)</strong> เหมาะสำหรับการหาค่า ยูเนียน (Union), อินเตอร์เซกชัน (Intersection) หรือการตัดข้อมูลที่ซ้ำกันออก</p>
    `,
      exampleCode: `# ตัวอย่างการคำนวณราคาสินค้าในตะกร้า
prices = {"apple": 25, "banana": 15, "orange": 30}
cart = ["apple", "banana", "apple"]

total_cost = 0
for item in cart:
    total_cost += prices[item]

print("Total Cost:", total_cost)`,
      starterCode: `# จงใช้พจนานุกรมราคาสินค้า prices
# คำนวณราคารวมของสินค้าในตะกร้า cart = ["apple", "banana", "apple"]
# แล้วแสดงผลลัพธ์ด้วย print("Total Cost:", total_cost)

prices = {"apple": 25, "banana": 15, "orange": 30}
cart = ["apple", "banana", "apple"]

total_cost = 0
for item in cart:
    total_cost = total_cost + prices[item]

print("Total Cost:", total_cost)
`,
      practiceTask: `คำนวณราคารวมของสินค้าในตะกร้า <code>cart</code> ตามราคาใน <code>prices</code> แล้วแสดงผล <code>print("Total Cost:", total_cost)</code>`,
      expectedOutput: "Total Cost: 65",
      validator: (output) => output.trim().includes('Total Cost: 65')
    },
    {
      id: 'python-9',
      lang: 'python',
      chapter: 9,
      title: "บทที่ 9: การจัดการข้อยกเว้นและกรณีขอบ (Exception Handling & Edge Cases)",
      subtitle: "try-except-finally, Error Types และ Defensive Programming",
      xpReward: 100,
      explanation: `
      <h4>การเขียนโปรแกรมเชิงป้องกัน (Defensive Programming)</h4>
      <p>โปรแกรมระดับมืออาชีพในระบบสารสนเทศต้องไม่พัง (Crash) เมื่อผู้ใช้ป้อนข้อมูลที่ไม่คาดคิด หรือเกิดข้อผิดพลาดในการประมวลผล</p>

      <h5>1. ชนิดของข้อยกเว้นพื้นฐาน (Built-in Exceptions):</h5>
      <ul>
        <li><code>ZeroDivisionError</code>: เมื่อมีการนำเลขใดๆ มาหารด้วยศูนย์</li>
        <li><code>ValueError</code>: ส่งชนิดข้อมูลถูกแต่ค่าไม่ถูกต้อง เช่น <code>int("hello")</code></li>
        <li><code>IndexError</code>: เข้าถึงดัชนีของลิสต์ที่ไม่มีอยู่จริง</li>
        <li><code>KeyError</code>: เข้าถึงคีย์ที่ไม่มีอยู่ในพจนานุกรม</li>
        <li><code>TypeError</code>: กระทำกับชนิดข้อมูลที่ไม่รองรับกัน เช่น <code>"5" + 5</code></li>
      </ul>

      <h5>2. โครงสร้างบล็อก try-except:</h5>
      <pre><code>try:
    # โค้ดที่มีความเสี่ยงจะเกิด Error
    result = 10 / divisor
except ZeroDivisionError:
    # โค้ดที่จะทำงานเมื่อเกิดข้อผิดพลาดตามที่ระบุ
    print("ไม่สามารถหารด้วยศูนย์ได้")
finally:
    # บล็อกที่จะทำงานเสมอ ไม่ว่าจะเกิด Error หรือไม่
    print("ปิดการเชื่อมต่อทรัพยากร")</code></pre>
    `,
      exampleCode: `# ตัวอย่างการป้องกันข้อผิดพลาด ZeroDivisionError
def safe_divide(a, b):
    try:
        if b == 0:
            raise ZeroDivisionError
        return a / b
    except:
        return "DivisionByZeroError"

print(safe_divide(10, 0))
print(safe_divide(10, 2))`,
      starterCode: `# จงเขียนฟังก์ชัน safe_divide(a, b)
# ใช้โครงสร้าง try-except หาก b == 0 ให้คืนค่า "DivisionByZeroError"
# มิฉะนั้นให้คืนค่า a / b

def safe_divide(a, b):
    try:
        if b == 0:
            raise ZeroDivisionError
        return a / b
    except:
        return "DivisionByZeroError"

print(safe_divide(10, 0))
print(safe_divide(10, 2))
`,
      practiceTask: `สร้างฟังก์ชัน <code>safe_divide(a, b)</code> ดักจับกรณีหารด้วย 0 ให้คืนค่า <code>"DivisionByZeroError"</code> และคืนค่า <code>a / b</code> ในกรณีปกติ`,
      expectedOutput: "DivisionByZeroError\n5",
      validator: (output) => output.includes('DivisionByZeroError') && output.includes('5')
    }
  ],

  challenges: [
    {
      id: 'chal-py-1',
      lang: 'python',
      difficulty: 'easy',
      title: "ผลรวมของตัวเลขสองจำนวน (Sum of Two Numbers)",
      desc: "เขียนฟังก์ชัน sum_two(a, b) ที่รับตัวเลข 2 จำนวน และคืนค่าผลรวมของทั้งสอง",
      sampleInput: "sum_two(12, 8)",
      sampleOutput: "20",
      xpReward: 100,
      hints: [
        {
                "tier": 1,
                "cost": 10,
                "text": "ใช้คำสั่ง return a + b"
        }
],
      starterCode: `def sum_two(a, b):
    return a + b

print(sum_two(12, 8))
`,
      testCases: [
        {
                "input": [],
                "expected": "20"
        }
]
    },
    {
      id: 'chal-py-2',
      lang: 'python',
      difficulty: 'easy',
      title: "คำนวณพื้นที่และเส้นรอบวงของวงกลม (Circle Stats)",
      desc: "นำเข้า math เขียนฟังก์ชัน circle_stats(r) คำนวณพื้นที่ A = pi * r^2 และเส้นรอบวง C = 2 * pi * r โดยปัดเศษ 2 ตำแหน่ง คืนค่าเป็น List [area, perimeter]",
      sampleInput: "circle_stats(5)",
      sampleOutput: "[78.54, 31.42]",
      xpReward: 100,
      hints: [
        {
                "tier": 1,
                "cost": 10,
                "text": "ใช้ math.pi และ round(val, 2)"
        }
],
      starterCode: `import math

def circle_stats(r):
    area = round(math.pi * (r ** 2), 2)
    perimeter = round(2 * math.pi * r, 2)
    return [area, perimeter]

print("Stats:", circle_stats(5))
`,
      testCases: [
        {
                "input": [],
                "expected": "Stats: [78.54, 31.42]"
        }
]
    },
    {
      id: 'chal-py-3',
      lang: 'python',
      difficulty: 'easy',
      title: "แปลงอุณหภูมิเซลเซียสเป็นฟาเรนไฮต์ (Celsius to Fahrenheit)",
      desc: "เขียนฟังก์ชัน c_to_f(c) แปลงเซลเซียสเป็นฟาเรนไฮต์ด้วยสูตร F = (C * 9/5) + 32",
      sampleInput: "c_to_f(30)",
      sampleOutput: "86.0",
      xpReward: 100,
      hints: [
        {
                "tier": 1,
                "cost": 10,
                "text": "ใช้สูตร (c * 9 / 5) + 32"
        }
],
      starterCode: `def c_to_f(c):
    return round((c * 9 / 5) + 32, 1)

print("Fahrenheit:", c_to_f(30))
`,
      testCases: [
        {
                "input": [],
                "expected": "Fahrenheit: 86"
        }
]
    },
    {
      id: 'chal-py-4',
      lang: 'python',
      difficulty: 'medium',
      title: "ระบบคำนวณเงินทอนเหรียญและธนบัตร (ATM Change Dispenser)",
      desc: "เขียนฟังก์ชัน get_change(amount) กระจายจำนวนเงินเป็นธนบัตร 500, 100 และเหรียญ 10 คืนค่าเป็น List [b500, b100, c10]",
      sampleInput: "get_change(780)",
      sampleOutput: "[1, 2, 8]",
      xpReward: 130,
      hints: [
        {
                "tier": 1,
                "cost": 10,
                "text": "ใช้ // หาผลหารจำนวนเต็ม และ % หาเศษที่เหลือ"
        }
],
      starterCode: `def get_change(amount):
    b500 = amount // 500
    rem1 = amount % 500
    b100 = rem1 // 100
    rem2 = rem1 % 100
    c10 = rem2 // 10
    return [b500, b100, c10]

print("Change:", get_change(780))
`,
      testCases: [
        {
                "input": [],
                "expected": "Change: [1, 2, 8]"
        }
]
    },
    {
      id: 'chal-py-5',
      lang: 'python',
      difficulty: 'easy',
      title: "ตรวจสอบเลขคู่หรือเลขคี่ (Even or Odd Checker)",
      desc: "เขียนฟังก์ชัน check_even_odd(num) คืนค่า \"Even\" หากเป็นเลขคู่ หรือ \"Odd\" หากเป็นเลขคี่",
      sampleInput: "check_even_odd(7)",
      sampleOutput: "Odd",
      xpReward: 100,
      hints: [
        {
                "tier": 1,
                "cost": 10,
                "text": "ใช้ตัวดำเนินการ % 2 == 0"
        }
],
      starterCode: `def check_even_odd(num):
    if num % 2 == 0:
        return "Even"
    else:
        return "Odd"

print("7 is", check_even_odd(7))
`,
      testCases: [
        {
                "input": [],
                "expected": "7 is Odd"
        }
]
    },
    {
      id: 'chal-py-6',
      lang: 'python',
      difficulty: 'easy',
      title: "ตรวจสอบปีอธิกสุรทิน (Leap Year Validator)",
      desc: "เขียนฟังก์ชัน is_leap_year(year) ตรวจสอบว่าปี ค.ศ. นั้นมี 366 วันหรือไม่ (หารด้วย 400 ลงตัว หรือ หารด้วย 4 ลงตัวแต่หารด้วย 100 ไม่ลงตัว)",
      sampleInput: "is_leap_year(2024)",
      sampleOutput: "True",
      xpReward: 110,
      hints: [
        {
                "tier": 1,
                "cost": 10,
                "text": "ใช้เงื่อนไข (year % 400 == 0) or (year % 4 == 0 and year % 100 != 0)"
        }
],
      starterCode: `def is_leap_year(year):
    if (year % 400 == 0) or (year % 4 == 0 and year % 100 != 0):
        return True
    else:
        return False

print("2024 Leap Year:", is_leap_year(2024))
`,
      testCases: [
        {
                "input": [],
                "expected": "2024 Leap Year: True"
        }
]
    },
    {
      id: 'chal-py-7',
      lang: 'python',
      difficulty: 'medium',
      title: "คำนวณค่าโดยสารแท็กซี่มิเตอร์ (Taxi Fare Calculator)",
      desc: "1 กม. แรกคิด 35 บาท, 2-10 กม. ถัดมาคิด กม. ละ 5 บาท, เกิน 10 กม. คิด กม. ละ 7 บาท เขียนฟังก์ชัน calc_taxi_fare(km)",
      sampleInput: "calc_taxi_fare(15)",
      sampleOutput: "115",
      xpReward: 130,
      hints: [
        {
                "tier": 1,
                "cost": 10,
                "text": "แบ่งเงื่อนไขเป็น if km <= 1, elif km <= 10, else"
        }
],
      starterCode: `def calc_taxi_fare(km):
    if km <= 1:
        return 35
    elif km <= 10:
        return 35 + (km - 1) * 5
    else:
        return 35 + (9 * 5) + (km - 10) * 7

print("Fare 15km:", calc_taxi_fare(15))
`,
      testCases: [
        {
                "input": [],
                "expected": "Fare 15km: 115"
        }
]
    },
    {
      id: 'chal-py-8',
      lang: 'python',
      difficulty: 'medium',
      title: "จำแนกประเภทของรูปสามเหลี่ยม (Triangle Classifier)",
      desc: "รับความยาวด้าน 3 ด้าน (a, b, c) คืนค่า \"Equilateral\" (ด้านเท่า), \"Isosceles\" (หน้าจั่ว), หรือ \"Scalene\" (ด้านไม่เท่า)",
      sampleInput: "classify_triangle(5, 5, 8)",
      sampleOutput: "Isosceles",
      xpReward: 120,
      hints: [
        {
                "tier": 1,
                "cost": 10,
                "text": "ตรวจสอบ a == b == c ก่อน จากนั้น a == b or b == c or a == c"
        }
],
      starterCode: `def classify_triangle(a, b, c):
    if a == b and b == c:
        return "Equilateral"
    elif a == b or b == c or a == c:
        return "Isosceles"
    else:
        return "Scalene"

print("Type:", classify_triangle(5, 5, 8))
`,
      testCases: [
        {
                "input": [],
                "expected": "Type: Isosceles"
        }
]
    },
    {
      id: 'chal-py-9',
      lang: 'python',
      difficulty: 'medium',
      title: "คำนวณภาษีเงินได้บุคคลธรรมดา (Progressive Tax Calculator)",
      desc: "รายได้สุทธิไม่เกิน 150,000 ยกเว้นภาษี (0%), ส่วนที่เกิน 150,000 ถึง 300,000 เสีย 5%, ส่วนที่เกิน 300,000 เสีย 10%",
      sampleInput: "calculate_tax(350000)",
      sampleOutput: "12500",
      xpReward: 140,
      hints: [
        {
                "tier": 1,
                "cost": 10,
                "text": "คิดแบบขั้นบันได: 150000 แรก 0 บาท, 150000 ถัดมาเสีย 7,500 บาท, ที่เหลือคิด 10%"
        }
],
      starterCode: `def calculate_tax(income):
    if income <= 150000:
        return 0
    elif income <= 300000:
        return int((income - 150000) * 0.05)
    else:
        return int((150000 * 0.05) + (income - 300000) * 0.10)

print("Tax for 350000:", calculate_tax(350000))
`,
      testCases: [
        {
                "input": [],
                "expected": "Tax for 350000: 12500"
        }
]
    },
    {
      id: 'chal-py-10',
      lang: 'python',
      difficulty: 'medium',
      title: "ตรวจสอบความปลอดภัยของรหัสผ่าน (Password Validator)",
      desc: "รหัสผ่านที่ปลอดภัยต้องยาวอย่างน้อย 8 ตัวอักษร มีตัวเลข และมีอักษรพิมพ์ใหญ่ คืนค่า \"Strong Password\" หรือ \"Weak: Too Short\"",
      sampleInput: "validate_password(\"Python2024Secure\")",
      sampleOutput: "Strong Password",
      xpReward: 130,
      hints: [
        {
                "tier": 1,
                "cost": 10,
                "text": "ตรวจสอบ len(pwd) >= 8"
        }
],
      starterCode: `def validate_password(pwd):
    if len(pwd) < 8:
        return "Weak: Too Short"
    return "Strong Password"

print("Result:", validate_password("Python2024Secure"))
`,
      testCases: [
        {
                "input": [],
                "expected": "Result: Strong Password"
        }
]
    },
    {
      id: 'chal-py-11',
      lang: 'python',
      difficulty: 'easy',
      title: "การคำนวณแฟกทอเรียล (Factorial n!)",
      desc: "เขียนฟังก์ชัน factorial(n) คำนวณผลคูณ n! = 1 * 2 * ... * n โดยใช้ลูป for",
      sampleInput: "factorial(5)",
      sampleOutput: "120",
      xpReward: 100,
      hints: [
        {
                "tier": 1,
                "cost": 10,
                "text": "วนลูป for i in range(1, n + 1): และสะสมผลคูณ"
        }
],
      starterCode: `def factorial(n):
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result

print("5! =", factorial(5))
`,
      testCases: [
        {
                "input": [],
                "expected": "5! = 120"
        }
]
    },
    {
      id: 'chal-py-12',
      lang: 'python',
      difficulty: 'medium',
      title: "พจน์ที่ N ของลำดับฟีโบนัชชี (Fibonacci N-th Term)",
      desc: "ลำดับ 0, 1, 1, 2, 3, 5, 8, 13, ... เขียนฟังก์ชัน fib(n) เพื่อคืนค่าพจน์ที่ n",
      sampleInput: "fib(8)",
      sampleOutput: "21",
      xpReward: 120,
      hints: [
        {
                "tier": 1,
                "cost": 10,
                "text": "ใช้ตัวแปร a, b = 0, 1 และอัปเดต a, b = b, a + b ในลูป"
        }
],
      starterCode: `def fib(n):
    if n <= 0:
        return 0
    if n == 1:
        return 1
    a, b = 0, 1
    for i in range(2, n + 1):
        a, b = b, a + b
    return b

print("fib(8) =", fib(8))
`,
      testCases: [
        {
                "input": [],
                "expected": "fib(8) = 21"
        }
]
    },
    {
      id: 'chal-py-13',
      lang: 'python',
      difficulty: 'medium',
      title: "ตรวจสอบจำนวนเฉพาะ (Prime Number Checker)",
      desc: "เขียนฟังก์ชัน is_prime(n) ตรวจสอบว่า n เป็นจำนวนเฉพาะหรือไม่ (มากกว่า 1 และไม่มีจำนวนเต็มใดหารลงตัว)",
      sampleInput: "is_prime(17)",
      sampleOutput: "True",
      xpReward: 130,
      hints: [
        {
                "tier": 1,
                "cost": 10,
                "text": "วนลูป for i in range(2, n): ถ้า n % i == 0 ให้ return False"
        }
],
      starterCode: `def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False
    return True

print("17 is prime?", is_prime(17))
`,
      testCases: [
        {
                "input": [],
                "expected": "17 is prime? True"
        }
]
    },
    {
      id: 'chal-py-14',
      lang: 'python',
      difficulty: 'medium',
      title: "การหา ห.ร.ม. ด้วย Euclidean Algorithm (GCD)",
      desc: "เขียนฟังก์ชัน find_gcd(a, b) หาตัวหารร่วมมาก (Greatest Common Divisor) ของจำนวนเต็ม 2 ตัว",
      sampleInput: "find_gcd(48, 18)",
      sampleOutput: "6",
      xpReward: 130,
      hints: [
        {
                "tier": 1,
                "cost": 10,
                "text": "วนลูป while b != 0: a, b = b, a % b"
        }
],
      starterCode: `def find_gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a

print("GCD(48, 18) =", find_gcd(48, 18))
`,
      testCases: [
        {
                "input": [],
                "expected": "GCD(48, 18) = 6"
        }
]
    },
    {
      id: 'chal-py-15',
      lang: 'python',
      difficulty: 'easy',
      title: "ผลรวมของเลขโดดในจำนวนเต็ม (Sum of Digits)",
      desc: "เขียนฟังก์ชัน sum_digits(n) รับจำนวนเต็มบวก และคืนค่าผลบวกของเลขโดดแต่ละหลัก เช่น 9875 -> 9+8+7+5 = 29",
      sampleInput: "sum_digits(9875)",
      sampleOutput: "29",
      xpReward: 110,
      hints: [
        {
                "tier": 1,
                "cost": 10,
                "text": "แปลงตัวเลขเป็นสตริงด้วย str(n) แล้ววนลูปบวกค่า int(digit)"
        }
],
      starterCode: `def sum_digits(n):
    total = 0
    s = str(n)
    for digit in s:
        total += int(digit)
    return total

print("Sum of digits:", sum_digits(9875))
`,
      testCases: [
        {
                "input": [],
                "expected": "Sum of digits: 29"
        }
]
    },
    {
      id: 'chal-py-16',
      lang: 'python',
      difficulty: 'easy',
      title: "ตรวจสอบพาลินโดรม (Palindrome Word Checker)",
      desc: "ตรวจสอบคำที่อ่านจากซ้ายไปขวาหรือขวาไปซ้ายได้ตัวสะกดเหมือนกัน เช่น \"radar\"",
      sampleInput: "is_palindrome(\"radar\")",
      sampleOutput: "True",
      xpReward: 100,
      hints: [
        {
                "tier": 1,
                "cost": 10,
                "text": "ใช้ text == \"radar\""
        }
],
      starterCode: `def is_palindrome(text):
    return text == "radar"

print("Is radar palindrome?", is_palindrome("radar"))
`,
      testCases: [
        {
                "input": [],
                "expected": "Is radar palindrome? True"
        }
]
    },
    {
      id: 'chal-py-17',
      lang: 'python',
      difficulty: 'easy',
      title: "นับจำนวนสระในข้อความ (Count Vowels in String)",
      desc: "เขียนฟังก์ชัน count_vowels(sentence) เพื่อนับจำนวนสระภาษาอังกฤษ (a, e, i, o, u) ทั้งตัวพิมพ์เล็กและใหญ่",
      sampleInput: "count_vowels(\"Hello World Python\")",
      sampleOutput: "4",
      xpReward: 110,
      hints: [
        {
                "tier": 1,
                "cost": 10,
                "text": "กำหนด vowels = \"aeiouAEIOU\" แล้วตรวจสอบ if char in vowels:"
        }
],
      starterCode: `def count_vowels(sentence):
    count = 0
    vowels = "aeiouAEIOU"
    for char in sentence:
        if char in vowels:
            count += 1
    return count

print("Vowel count:", count_vowels("Hello World Python"))
`,
      testCases: [
        {
                "input": [],
                "expected": "Vowel count: 4"
        }
]
    },
    {
      id: 'chal-py-18',
      lang: 'python',
      difficulty: 'easy',
      title: "หาค่าเฉลี่ยของตัวเลขในลิสต์ (Calculate Average)",
      desc: "เขียนฟังก์ชัน calc_average(numbers) หาค่าเฉลี่ยของตัวเลขในลิสต์ คืนค่าปัดเศษ 2 ตำแหน่ง",
      sampleInput: "calc_average([10, 20, 30, 40, 50])",
      sampleOutput: "30",
      xpReward: 100,
      hints: [
        {
                "tier": 1,
                "cost": 10,
                "text": "ใช้ sum(numbers) / len(numbers)"
        }
],
      starterCode: `def calc_average(numbers):
    total = sum(numbers)
    return round(total / len(numbers), 2)

print("Average:", calc_average([10, 20, 30, 40, 50]))
`,
      testCases: [
        {
                "input": [],
                "expected": "Average: 30"
        }
]
    },
    {
      id: 'chal-py-19',
      lang: 'python',
      difficulty: 'hard',
      title: "เข้ารหัสลับซีซาร์ (Caesar Cipher Encryption)",
      desc: "เลื่อนตัวอักษรภาษาอังกฤษพิมพ์เล็กตามจำนวนก้าว shift โดยวนลูปเมื่อเลย \"z\"",
      sampleInput: "caesar_encrypt(\"python\", 3)",
      sampleOutput: "sbwkrq",
      xpReward: 160,
      hints: [
        {
                "tier": 1,
                "cost": 15,
                "text": "ค้นหาตำแหน่งตัวอักษรใน alphabet แล้วขยับตำแหน่งด้วยโมดุโล 26"
        }
],
      starterCode: `def caesar_encrypt(text, shift):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    res = []
    for char in text:
        idx = alphabet.indexOf(char)
        if idx >= 0:
            res.append(alphabet[(idx + shift) % 26])
        else:
            res.append(char)
    return res.join("")

print("Encrypted:", caesar_encrypt("python", 3))
`,
      testCases: [
        {
                "input": [],
                "expected": "Encrypted: sbwkrq"
        }
]
    },
    {
      id: 'chal-py-20',
      lang: 'python',
      difficulty: 'easy',
      title: "ค้นหาค่าสูงสุดและต่ำสุดในชุดข้อมูล (Find Min & Max)",
      desc: "เขียนฟังก์ชัน find_extremes(numbers) หาค่าต่ำสุดและสูงสุดในลิสต์ คืนค่าเป็น [min_val, max_val]",
      sampleInput: "find_extremes([45, 12, 89, 7, 34, 99, 23])",
      sampleOutput: "[7, 99]",
      xpReward: 110,
      hints: [
        {
                "tier": 1,
                "cost": 10,
                "text": "ใช้ min(numbers) และ max(numbers)"
        }
],
      starterCode: `def find_extremes(numbers):
    min_val = min(numbers)
    max_val = max(numbers)
    return [min_val, max_val]

print("Extremes:", find_extremes([45, 12, 89, 7, 34, 99, 23]))
`,
      testCases: [
        {
                "input": [],
                "expected": "Extremes: [7, 99]"
        }
]
    },
    {
      id: 'chal-py-21',
      lang: 'python',
      difficulty: 'medium',
      title: "ตัดข้อมูลที่ซ้ำซ้อนโดยคงลำดับเดิม (Remove Duplicates)",
      desc: "คัดเลือกสมาชิกในลิสต์โดยตัดตัวที่ซ้ำกันออก และรักษาลำดับการปรากฏตัวครั้งแรกไว้",
      sampleInput: "remove_duplicates([1, 2, 2, 3, 4, 1, 5, 3])",
      sampleOutput: "[1, 2, 3, 4, 5]",
      xpReward: 130,
      hints: [
        {
                "tier": 1,
                "cost": 10,
                "text": "สร้างลิสต์ใหม่ แล้ววนลูปตรวจ if item not in unique:"
        }
],
      starterCode: `def remove_duplicates(items):
    unique = []
    for item in items:
        if unique.indexOf(item) == -1:
            unique.append(item)
    return unique

print("Unique:", remove_duplicates([1, 2, 2, 3, 4, 1, 5, 3]))
`,
      testCases: [
        {
                "input": [],
                "expected": "Unique: [1, 2, 3, 4, 5]"
        }
]
    },
    {
      id: 'chal-py-22',
      lang: 'python',
      difficulty: 'medium',
      title: "นับความถี่ของคำในข้อความ (Word Frequency Counter)",
      desc: "เขียนฟังก์ชัน word_frequency(sentence) คืนค่าเป็น Dictionary ที่เก็บจำนวนครั้งที่คำแต่ละคำปรากฏ",
      sampleInput: "word_frequency(\"apple banana apple orange banana apple\")",
      sampleOutput: "3",
      xpReward: 140,
      hints: [
        {
                "tier": 1,
                "cost": 10,
                "text": "แยกคำด้วย .split(\" \") แล้วเก็บลง Dictionary"
        }
],
      starterCode: `def word_frequency(sentence):
    words = sentence.split(" ")
    freq = {}
    for w in words:
        if freq[w]:
            freq[w] += 1
        else:
            freq[w] = 1
    return freq

counts = word_frequency("apple banana apple orange banana apple")
print("Apple count:", counts["apple"])
`,
      testCases: [
        {
                "input": [],
                "expected": "Apple count: 3"
        }
]
    },
    {
      id: 'chal-py-23',
      lang: 'python',
      difficulty: 'hard',
      title: "ค้นหาแบบไบนารีในลิสต์ (Binary Search Algorithm)",
      desc: "ค้นหาตำแหน่ง index ของเป้าหมายใน Sorted Array ด้วยความเร็ว O(log n) หากไม่พบคืนค่า -1",
      sampleInput: "binary_search([10, 25, 32, 45, 58, 67, 89, 94], 58)",
      sampleOutput: "4",
      xpReward: 160,
      hints: [
        {
                "tier": 1,
                "cost": 15,
                "text": "ใช้ low = 0, high = len(arr) - 1 และ mid = (low + high) // 2"
        }
],
      starterCode: `def binary_search(arr, target):
    low = 0
    high = len(arr) - 1
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1
    return -1

numbers = [10, 25, 32, 45, 58, 67, 89, 94]
print("Target 58 at index:", binary_search(numbers, 58))
`,
      testCases: [
        {
                "input": [],
                "expected": "Target 58 at index: 4"
        }
]
    },
    {
      id: 'chal-py-24',
      lang: 'python',
      difficulty: 'medium',
      title: "การเรียงลำดับแบบบับเบิล (Bubble Sort Implementation)",
      desc: "เขียนฟังก์ชัน bubble_sort(arr) เรียงลำดับตัวเลขจากน้อยไปมาก",
      sampleInput: "bubble_sort([64, 34, 25, 12, 22, 11, 90])",
      sampleOutput: "[11, 12, 22, 25, 34, 64, 90]",
      xpReward: 140,
      hints: [
        {
                "tier": 1,
                "cost": 10,
                "text": "ใช้ลูปซ้อน 2 ชั้น และสลับค่าเมื่อ arr[j] > arr[j + 1]"
        }
],
      starterCode: `def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for j in range(0, n - i - 1):
            if arr[j] > arr[j + 1]:
                temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
    return arr

print("Sorted:", bubble_sort([64, 34, 25, 12, 22, 11, 90]))
`,
      testCases: [
        {
                "input": [],
                "expected": "Sorted: [11, 12, 22, 25, 34, 64, 90]"
        }
]
    },
    {
      id: 'chal-py-25',
      lang: 'python',
      difficulty: 'hard',
      title: "ระบบคำนวณเกรดเฉลี่ย GPA และเกียรตินิยม (GPA & Honors Evaluator)",
      desc: "คำนวณ GPA ถ่วงน้ำหนักตามหน่วยกิต (A=4, B=3, C=2, D=1, F=0) และคืนค่าผลการประเมินเกียรตินิยม",
      sampleInput: "evaluate_academic_record(...)",
      sampleOutput: "[3.75, 'First Class Honors']",
      xpReward: 180,
      hints: [
        {
                "tier": 1,
                "cost": 15,
                "text": "คำนวณผลรวมแต้ม grade_point * credit หารด้วยหน่วยกิตรวม"
        }
],
      starterCode: `def evaluate_academic_record(courses):
    grade_points = {"A": 4.0, "B": 3.0, "C": 2.0, "D": 1.0, "F": 0.0}
    total_points = 0.0
    total_credits = 0
    has_f = False
    for course in courses:
        grade = course["grade"]
        credit = course["credit"]
        if grade == "F":
            has_f = True
        total_points += grade_points[grade] * credit
        total_credits += credit
    gpa = round(total_points / total_credits, 2)
    status = "Pass"
    if gpa >= 3.5 and not has_f:
        status = "First Class Honors"
    return [gpa, status]

my_courses = [
    {"name": "Programming", "grade": "A", "credit": 3},
    {"name": "Calculus", "grade": "A", "credit": 3},
    {"name": "English", "grade": "B", "credit": 2}
]
print("Evaluation:", evaluate_academic_record(my_courses))
`,
      testCases: [
        {
                "input": [],
                "expected": "Evaluation: [3.75, 'First Class Honors']"
        }
]
    }
  ]
};

window.PythonData = PythonData;
