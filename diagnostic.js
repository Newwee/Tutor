/**
 * ==========================================================================
 * TUTORCODE PLATFORM - DIAGNOSTIC ENGINE (diagnostic.js)
 * Intelligent Code & Logic Diagnosis with Deep Root-Cause Analysis
 * ==========================================================================
 */
const DiagnosticSystem = {
  analyze(code, stdout, error, expectedOutput, lessonOrChal) {
    let errorType = 'ผลลัพธ์ไม่ตรงกับเงื่อนไข (Output & Logic Mismatch)';
    let errorCategory = 'logic';
    let explanation = '';
    let adviceSteps = [];

    const actual = (stdout || '').trim();
    const expected = (expectedOutput || '').trim();

    // 1. Syntax / Runtime Errors
    if (error) {
      errorCategory = 'syntax_runtime';

      if (error.includes('SyntaxError') || error.includes('Unexpected token')) {
        errorType = 'ไวยากรณ์ผิดพลาด (Syntax Error)';
        explanation = 'ตัวแปลภาษา (Interpreter) พบโครงสร้างไวยากรณ์ที่ไม่ถูกต้องตามกฎของภาษาคอมพิวเตอร์ ทำให้โปรแกรมไม่สามารถประมวลผลคำสั่งต่อได้';
        adviceSteps = [
          'ตรวจสอบเครื่องหมายวงเล็บเปิดและปิด ( ), ปีกกา { } หรือก้ามปู [ ] ว่าจับคู่กันถูกต้องและครบถ้วนหรือไม่',
          'ตรวจสอบว่ามีเครื่องหมายโคลอน (:) ท้ายคำสั่งบล็อก เช่น if, elif, else, def, for หรือ while หรือไม่',
          'ตรวจสอบเครื่องหมายคำพูด String (" หรือ \') ว่าเปิดและปิดด้วยสัญลักษณ์ชนิดเดียวกัน ไม่เปิดด้วยอัญประกาศคู่แล้วปิดด้วยเดี่ยว'
        ];
      } else if (error.includes('is not defined') || error.includes('ReferenceError') || error.includes('NameError')) {
        errorType = 'เรียกใช้ตัวแปรหรือฟังก์ชันที่ยังไม่ได้ประกาศ (Name / Reference Error)';
        const varMatch = error.match(/(\w+) is not defined/);
        const varName = varMatch ? varMatch[1] : 'ตัวแปร';
        explanation = 'โปรแกรมพยายามเรียกใช้งานตัวแปรหรือฟังก์ชันชื่อ <code>' + varName + '</code> แต่ตัวแปรนี้ยังไม่เคยถูกสร้างขึ้นในหน่วยความจำ หรือถูกกำหนดชื่อไว้ภายหลังบรรทัดที่เรียกใช้ (Python ทำงานแบบ Top-Down ตามลำดับบรรทัด)';
        adviceSteps = [
          'ตรวจสอบว่าคุณได้เขียนประกาศตัวแปร <code>' + varName + ' = ...</code> ก่อนหน้าบรรทัดที่จะนำไปใช้งานหรือไม่',
          'ตรวจสอบตัวสะกดภาษาอังกฤษของตัวแปร โดยระวังตัวพิมพ์เล็ก-พิมพ์ใหญ่ (Python เป็น Case-Sensitive เช่น myVar ต่างจาก myvar)',
          'หากเป็นฟังก์ชันในโมดูล เช่น math.sqrt ตรวจสอบว่าได้เขียน import math หรือยัง'
        ];
      } else if (error.includes('TypeError')) {
        errorType = 'ชนิดข้อมูลไม่เข้ากัน (Type Mismatch Error)';
        explanation = 'มีการกระทำ (Operation) ระหว่างตัวแปรที่มีชนิดข้อมูล (Data Type) ไม่เข้ากัน เช่น นำข้อความ (str) ไปบวกกับตัวเลข (int) หรือส่งค่าอาร์กิวเมนต์ผิดประเภท';
        adviceSteps = [
          'ใช้ฟังก์ชันแปลงชนิดข้อมูล (Type Casting) เช่น <code>str(value)</code> เพื่อแปลงเป็นข้อความ หรือ <code>int(value)</code> / <code>float(value)</code> เพื่อแปลงเป็นตัวเลข',
          'ใช้ฟังก์ชัน <code>type(ตัวแปร)</code> พิมพ์ออกมาตรวจสอบประเภทข้อมูลใน Editor',
          'หากต้องการต่อข้อความกับตัวเลขใน print() สามารถคั่นด้วยเครื่องหมายจุลภาค <code>print("Result:", val)</code> แทนการบวกสตริง'
        ];
      } else if (error.includes('IndentationError') || error.includes('indent')) {
        errorType = 'การจัดระยะย่อหน้าไม่ถูกต้อง (Indentation Error)';
        explanation = 'ภาษา Python ใช้ระยะการเว้นวรรค (Indentation) ในการกำหนดขอบเขตบล็อกคำสั่ง (Scope Block) แทนการใช้วงเล็บปีกกา เมื่อระดับย่อหน้าไม่สม่ำเสมอ ตัวแปลภาษาจะไม่สามารถรู้ได้ว่าคำสั่งนั้นสังกัดบล็อกใด';
        adviceSteps = [
          'กดปุ่ม TAB หรือเคาะ Space 4 ครั้ง ให้กับคำสั่งที่อยู่ภายใต้บล็อก if, elif, else, for, while หรือ def',
          'ตรวจสอบว่าคำสั่งในระดับเดียวกันมีจำนวนช่องว่างเท่ากันอย่างเคร่งครัด',
          'หลีกเลี่ยงการผสมระหว่างการกดปุ่ม Tab และการเคาะ Space Bar'
        ];
      } else if (error.includes('ZeroDivisionError') || error.includes('division by zero')) {
        errorType = 'หารด้วยศูนย์ (Zero Division Error)';
        explanation = 'ในทางคณิตศาสตร์และการคำนวณ ตัวหารไม่สามารถมีค่าเป็น 0 ได้ (Undefined) เมื่อโปรแกรมพบการหารด้วย 0 ระบบจะหยุดทำงานทันทีเพื่อป้องกันข้อผิดพลาดเชิงตรรกะ';
        adviceSteps = [
          'เขียนเงื่อนไข <code>if divisor != 0:</code> ตรวจสอบค่าตัวหารก่อนนำไปคำนวณเสมอ',
          'หรือใช้โครงสร้าง <code>try: ... except ZeroDivisionError:</code> เพื่อดักจับข้อผิดพลาดอย่างปลอดภัย'
        ];
      } else if (error.includes('IndexError')) {
        errorType = 'ตำแหน่งดัชนีเกินขอบเขต (Index Out of Range Error)';
        explanation = 'คุณพยายามเข้าถึงตำแหน่ง Index ของ List หรือ Tuple ที่ไม่มีอยู่จริง เช่น ลิสต์มีสมาชิก 3 ตัว (ดัชนี 0, 1, 2) แต่พยายามเรียก <code>list[3]</code>';
        adviceSteps = [
          'จำไว้ว่าใน Python ดัชนีเริ่มต้นนับจาก 0 เสมอ สมาชิกตัวสุดท้ายคือ index <code>len(list) - 1</code> หรือใช้ <code>list[-1]</code>',
          'ตรวจสอบขนาดของลิสต์ด้วย <code>len(ตัวแปร)</code> ก่อนอ้างอิงตำแหน่ง'
        ];
      } else {
        errorType = 'ข้อผิดพลาดขณะประมวลผล (Runtime Execution Error)';
        explanation = 'เกิดข้อผิดพลาดขึ้นระหว่างการรันโปรแกรม: <code>' + error + '</code>';
        adviceSteps = [
          'ตรวจสอบลำดับขั้นตอนการทำงานในโค้ดตั้งแต่บรรทัดแรกจนถึงบรรทัดที่เกิดปัญหา',
          'ลองแทรกคำสั่ง <code>print()</code> เพื่อดูค่าของตัวแปรในแต่ละจังหวะการทำงาน'
        ];
      }
    } else {
      // 2. Logic / Output Mismatch Analysis
      if (!actual) {
        errorType = 'ไม่พบผลลัพธ์จากการประมวลผล (Empty Output)';
        explanation = 'โปรแกรมประมวลผลสำเร็จโดยไม่เกิด Syntax Error แต่ไม่มีข้อมูลใดถูกส่งออกมาทางหน้าจอ Console ทำให้ระบบตรวจสอบคำตอบไม่ได้';
        adviceSteps = [
          'ตรวจสอบว่ามีคำสั่ง <code>print(...)</code> เพื่อแสดงผลลัพธ์สุดท้ายออกทางหน้าจอหรือไม่',
          'หากคุณเขียนเป็นฟังก์ชัน ให้ตรวจสอบว่าได้เรียกใช้ฟังก์ชันและส่งผลลัพธ์เข้า <code>print(ชื่อฟังก์ชัน(...))</code> หรือยัง',
          'ตรวจดูว่าตัวแปรที่ต้องการแสดงผลถูกส่งเข้าไปในฟังก์ชัน print() ครบถ้วนหรือไม่'
        ];
      } else if (actual.toLowerCase() === expected.toLowerCase() && actual !== expected) {
        errorType = 'ตัวพิมพ์เล็ก-ใหญ่ไม่ตรงกับโจทย์ (Case Sensitivity Mismatch)';
        explanation = 'ข้อความคำตอบมีความหมายถูกต้องแล้ว แต่ตัวอักษรพิมพ์เล็กหรือพิมพ์ใหญ่ยังไม่ตรงกับที่ระบบคาดหวัง (ในคอมพิวเตอร์ รหัส ASCII ของตัวพิมพ์ใหญ่และเล็กแตกต่างกัน)';
        adviceSteps = [
          'รูปแบบที่โจทย์คาดหวัง: <code>' + expected + '</code>',
          'สิ่งที่โค้ดของคุณแสดงออกมา: <code>' + actual + '</code>',
          'โปรดตรวจสอบตัวสะกดและปรับตัวพิมพ์เล็ก/ใหญ่ให้ตรงตามรูปแบบของโจทย์ทุกตัวอักษร'
        ];
      } else if (actual.replace(/\s+/g, '') === expected.replace(/\s+/g, '') && actual !== expected) {
        errorType = 'ระยะการเว้นวรรคไม่ตรงกัน (Spacing / Whitespace Mismatch)';
        explanation = 'ตัวอักษรและตัวเลขทั้งหมดถูกต้องสมบูรณ์แล้ว แต่มีช่องว่าง (Whitespace) เกินมาหรือขาดหายไป เช่น การเว้นวรรคหลังเครื่องหมายโคลอน (:) หรือระหว่างคำ';
        adviceSteps = [
          'สังเกตช่องว่างใน Expected Output: <code>"' + expected + '"</code>',
          'เปรียบเทียบกับผลลัพธ์ของคุณ: <code>"' + actual + '"</code>',
          'ปรับการเว้นวรรคในคำสั่ง print ให้ตรงกับโจทย์ เช่น <code>print("Label:", value)</code> จะเว้น 1 ช่องหลังโคลอนโดยอัตโนมัติ'
        ];
      } else if (code.includes('print(') && (code.includes('"x*y"') || code.includes("'x*y'") || code.includes('"area"') || code.includes("'area'"))) {
        errorType = 'แสดงชื่อตัวแปรแทนที่จะคำนวณค่าจริง (String Literal Quoting)';
        explanation = 'คุณใส่เครื่องหมายคำพูด (Quotes) ครอบชื่อตัวแปรหรือสูตรคำนวณ ทำให้ Python มองว่าเป็นข้อความธรรมดา (String) แทนที่จะนำตัวแปรมาคำนวณผลลัพธ์';
        adviceSteps = [
          'นำเครื่องหมายคำพูดออกจากตัวแปร เช่น เปลี่ยนจาก <code>print("area")</code> เป็น <code>print(area)</code>',
          'หากเป็นสูตรคำนวณ ให้เขียนสูตรโดยไม่ต้องมีคำพูดครอบ เช่น <code>print(width * height)</code>'
        ];
      } else {
        errorType = 'ผลลัพธ์จากการคำนวณไม่ตรงกับเป้าหมาย (Calculation Logic Mismatch)';
        explanation = 'โปรแกรมทำงานสำเร็จและพิมพ์ผลลัพธ์ออกมา แต่ค่าที่ได้ยังไม่ตรงกับเงื่อนไขของโจทย์ อาจเกิดจากการใช้สูตรคำนวณที่คลาดเคลื่อน ตัวแปรตั้งต้นไม่ตรง หรือเงื่อนไขใน if/loop ผิดพลาด';
        adviceSteps = [
          'ค่าที่โจทย์ต้องการคือ: <code>' + expected + '</code> แต่ผลลัพธ์ของคุณได้: <code>' + actual + '</code>',
          'ทบทวนสูตรคำนวณทางคณิตศาสตร์และลำดับความสำคัญของเครื่องหมาย (+, -, *, /, //, %, **)',
          'ตรวจสอบว่าตัวแปร Input ที่โจทย์กำหนดถูกนำมาคำนวณครบทุกตัวหรือไม่'
        ];
      }
    }

    return {
      errorType,
      errorCategory,
      expected: expected || '(ไม่ระบุ)',
      actual: actual || (error ? error : '(ไม่มีข้อมูลแสดงผล)'),
      explanation,
      adviceSteps
    };
  },

  renderHtml(diag) {
    return `
      <div class="diagnostic-card">
        <div class="diag-header">
          <span class="diag-type-badge ${diag.errorCategory}">${diag.errorType}</span>
          <div class="diag-title"><i class="fa-solid fa-triangle-exclamation"></i> การวิเคราะห์ข้อผิดพลาดโดยละเอียด (Diagnostic Breakdown)</div>
        </div>
        <div class="diag-diff-grid">
          <div class="diff-box expected">
            <div class="diff-title"><i class="fa-solid fa-bullseye"></i> ค่าที่โจทย์ต้องการ (Expected Output)</div>
            <div class="diff-content">${this.escapeHtml(diag.expected)}</div>
          </div>
          <div class="diff-box actual">
            <div class="diff-title"><i class="fa-solid fa-circle-xmark"></i> ค่าที่โปรแกรมส่งออก (Actual Output)</div>
            <div class="diff-content">${this.escapeHtml(diag.actual)}</div>
          </div>
        </div>
        <div class="diag-explanation">
          <strong><i class="fa-solid fa-magnifying-glass"></i> สาเหตุที่เกิดขึ้นในเชิงลึก (Root Cause Analysis):</strong>
          <p>${diag.explanation}</p>
        </div>
        <div class="diag-advice">
          <strong><i class="fa-solid fa-wrench"></i> ขั้นตอนการแก้ไขปัญหา (Step-by-Step Guidance):</strong>
          <ol class="diag-steps">
            ${diag.adviceSteps.map(step => `<li>${step}</li>`).join('')}
          </ol>
        </div>
      </div>
    `;
  },

  escapeHtml(text) {
    if (!text) return '';
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
};

window.DiagnosticSystem = DiagnosticSystem;
