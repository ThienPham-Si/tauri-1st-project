#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

#[tauri::command]
fn my_custom_command(invoke_message: String) -> String {
  let result = shift_1_str(invoke_message);
  println!("I was invoked from JS, with this message: {}", result);
  result
}

fn shift_1(c: char) -> char {
  std::char::from_u32(c as u32 + 1).unwrap_or(c)
}

fn shift_1_str(s: String) -> String {
  s.chars().map(shift_1).collect()
}

fn main() {
tauri::Builder::default()
  .invoke_handler(tauri::generate_handler![my_custom_command])
  .run(tauri::generate_context!())
  .expect("error while running tauri application");
}