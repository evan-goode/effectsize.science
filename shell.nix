{ pkgs ? import <nixos-unstable> {}}:
pkgs.mkShell {
    nativeBuildInputs = with pkgs; [ nodejs yarn node-gyp ];
}
