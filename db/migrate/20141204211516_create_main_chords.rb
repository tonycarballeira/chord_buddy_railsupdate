class CreateMainChords < ActiveRecord::Migration[4.1.7]
  def change
    create_table :main_chords do |t|
      t.string :name

      t.timestamps
    end
  end
end
